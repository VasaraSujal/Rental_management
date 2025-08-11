const express = require('express');
const { addproduct } = require('./productcontrollers');

const router = express.Router();

router.post('/addproduct', addproduct);

module.exports = router;