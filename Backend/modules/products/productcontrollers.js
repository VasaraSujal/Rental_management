const { getDB } = require('../../config/db');
const { ObjectId } = require('mongodb');

const addproduct = async (req, res) => {
  try {
    const db = getDB();
    let {
      name,
      description,
      price,
      renttype,
      location,
      category,
      images,
      ownerId
    } = req.body;

    // Basic validation
    if (!name || !description || !price || !location || !category || !ownerId || !renttype) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate renttype (hour, day, month)
    const validRentTypes = ['hour', 'day', 'month'];
    if (!validRentTypes.includes(renttype.toLowerCase())) {
      return res.status(400).json({ message: 'Invalid rent type' });
    }
    renttype = renttype.toLowerCase();

    // Validate price is positive number
    if (typeof price !== 'number' || price <= 0) {
      return res.status(400).json({ message: 'Price must be a positive number' });
    }

    // Validate images if provided
    if (images && (!Array.isArray(images) || !images.every(img => typeof img === 'string'))) {
      return res.status(400).json({ message: 'Images must be an array of strings' });
    }

    // Capitalize first letter for dynamic field name
    const priceField = `pricePer${renttype.charAt(0).toUpperCase() + renttype.slice(1)}`;
    console.log(`Using dynamic field: ${priceField}`);
    // Prepare product document with dynamic price field
    const newProduct = {
      name,
      description,
      location,
      category,
      [priceField]: price,
      images: images || [],
      ownerId: new ObjectId(ownerId),
      createdAt: new Date(),
      updatedAt: new Date(),
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
