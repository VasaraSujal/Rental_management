const express = require('express');
const { addUser, userprofile,updateUserProfile } = require('./usercontrollers');

const router = express.Router();


router.post('/add', addUser);
router.get('/profile/:email', userprofile);
router.put('/profile/:email', updateUserProfile);


module.exports = router;