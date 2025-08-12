const express = require('express');
<<<<<<< HEAD
const { addproduct, producttransaction, getAllProducts,addincart, getcartproductbyemail,deleteFromCart,productbyitsid} = require('./productcontrollers');
=======
const { addproduct, producttransaction, getAllProducts,addincart, getcartproductbyemail,deleteFromCart, deleteFromCart2 } = require('./productcontrollers');
>>>>>>> 6feced58c8e1fa6a10568ae8b67f98e02d5a90ef

const router = express.Router();

router.post('/addproduct', addproduct);
router.post('/addincart', addincart);
router.get('/cart/:email', getcartproductbyemail);
router.delete('/cartdelete/:email/:productId', deleteFromCart);
router.delete('/cart/:email', deleteFromCart2);

router.post('/producttransaction', producttransaction);

router.get('/products', getAllProducts);
router.get('/product/:id', productbyitsid);

module.exports = router;
