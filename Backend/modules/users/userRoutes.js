const express = require('express');
const { addUser, userprofile, updateUserProfile, changePassword } = require('./usercontrollers');

const router = express.Router();


router.post('/add', addUser);
router.get('/profile/:email', userprofile);
router.put('/profile/:email', updateUserProfile);
router.put("/change-password", changePassword);


module.exports = router;