const express = require('express');
const router = express.Router();
const { generateform,handleBookingResponse } = require('./Bookingcontrollers');

router.post('/form/generate', generateform);
router.post('/response', handleBookingResponse);

module.exports = router;