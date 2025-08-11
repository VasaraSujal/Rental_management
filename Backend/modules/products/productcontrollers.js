const { getDB } = require('../../config/db');

const { ObjectId } = require('mongodb');

const addproduct = async (req, res) => {
  try {
    const db = getDB();
    const {
      name,
      description,
      price,
      location,
      category,
      images,
      ownerId
    } = req.body;

    // Basic validation
    if (!name || !description || !price || !location || !category || !ownerId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }


    if (typeof price !== 'number' || price <= 0) {
      return res.status(400).json({ message: 'Price must be a positive number' });
    }

    if (images && (!Array.isArray(images) || !images.every(img => typeof img === 'string'))) {
      return res.status(400).json({ message: 'Images must be an array of strings' });
    }

    // Prepare product document
    const newProduct = {
      name,
      description,
      price,
      location,
      category,
      images: images || [],
      ownerId: new ObjectId(ownerId),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Insert into DB
    const result = await db.collection('all_products').insertOne(newProduct);

    res.status(201).json({
      message: 'Product added successfully',
      productId: result.insertedId,
      collectionName: 'all_products'
    });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = { addproduct };