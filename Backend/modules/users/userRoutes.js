const express = require('express');
const { addUser } = require('./usercontrollers');

const router = express.Router();


router.post('/add', addUser);

module.exports = router;