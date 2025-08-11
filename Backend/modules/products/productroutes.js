const express = require('express');
const { addproduct, producttransaction, getAllProducts,addincart, getcartproductbyemail,deleteFromCart, deleteFromCart2 } = require('./productcontrollers');

const router = express.Router();

router.post('/addproduct', addproduct);
router.post('/addincart', addincart);
router.get('/cart/:email', getcartproductbyemail);
router.delete('/cartdelete/:email/:productId', deleteFromCart);
router.delete('/cart/:email', deleteFromCart2);

router.post('/producttransaction', producttransaction);

router.get('/products', getAllProducts);

module.exports = router;
