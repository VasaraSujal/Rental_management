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

    if (!name || !description || !price || !location || !category || !ownerId || !renttype) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const validRentTypes = ['hour', 'day', 'month'];
    if (!validRentTypes.includes(renttype.toLowerCase())) {
      return res.status(400).json({ message: 'Invalid rent type' });
    }
    renttype = renttype.toLowerCase();

    if (typeof price !== 'number' || price <= 0) {
      return res.status(400).json({ message: 'Price must be a positive number' });
    }

    if (images && (!Array.isArray(images) || !images.every(img => typeof img === 'string'))) {
      return res.status(400).json({ message: 'Images must be an array of strings' });
    }

    const priceField = `pricePer${renttype.charAt(0).toUpperCase() + renttype.slice(1)}`;

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

const producttransaction = async (req, res) => {
  try {
    const db = getDB();
    const {
      productId,
      ownerId,
      renterId,
      renttype,
      duration,
      totalAmount,
      transactionDate,
      startDate,
      endDate,
      securityDeposit,
      notes
    } = req.body;

    if (!productId || !ownerId || !renterId || !renttype || !duration || !totalAmount) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const validRentTypes = ['hour', 'day', 'month'];
    if (!validRentTypes.includes(renttype.toLowerCase())) {
      return res.status(400).json({ message: 'Invalid rent type' });
    }

    if (typeof duration !== 'number' || duration <= 0) {
      return res.status(400).json({ message: 'Duration must be a positive number' });
    }
    if (typeof totalAmount !== 'number' || totalAmount <= 0) {
      return res.status(400).json({ message: 'Total amount must be a positive number' });
    }
    if (securityDeposit && (typeof securityDeposit !== 'number' || securityDeposit < 0)) {
      return res.status(400).json({ message: 'Security deposit must be a positive number or zero' });
    }

    const transaction = {
      productId: new ObjectId(productId),
      ownerId: new ObjectId(ownerId),
      renterId: new ObjectId(renterId),
      renttype: renttype.toLowerCase(),
      duration,
      totalAmount,
      transactionDate: transactionDate ? new Date(transactionDate) : new Date(),
      startDate: startDate ? new Date(startDate) : new Date(),
      endDate: endDate ? new Date(endDate) : null,
      securityDeposit: securityDeposit || 0,
      paymentStatus: 'unpaid',
      status: 'pending',
      notes: notes || '',
      createdAt: new Date()
    };

    const result = await db.collection('product_transactions').insertOne(transaction);

    res.status(201).json({
      message: 'Product transaction recorded successfully',
      transactionId: result.insertedId
    });
  } catch (error) {
    console.error('Error recording product transaction:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ✅ New: Get all products
const getAllProducts = async (req, res) => {
  try {
    const db = getDB();
    const products = await db.collection('all_products').find({}).toArray();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { addproduct, producttransaction, getAllProducts };
