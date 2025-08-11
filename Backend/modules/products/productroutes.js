const express = require('express');
const { addproduct, producttransaction, getAllProducts } = require('./productcontrollers');

const router = express.Router();

router.post('/addproduct', addproduct);

router.post('/producttransaction', producttransaction);

router.get('/products', getAllProducts);

module.exports = router;
