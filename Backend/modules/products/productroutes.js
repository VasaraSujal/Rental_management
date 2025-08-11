const express = require('express');
const { addproduct, producttransaction } = require('./productcontrollers');

const router = express.Router();

router.post('/addproduct', addproduct);
router.post('/producttransaction', producttransaction);

module.exports = router;