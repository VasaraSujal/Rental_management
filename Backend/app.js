const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./modules/auth/authRoutes');
const userRoutes = require('./modules/users/userRoutes');
const productroutes=require('./modules/products/productroutes')
<<<<<<< HEAD
const BookingRoutes = require('./modules/Booking/Bookingroutes');
=======
const paymentRoutes = require("./modules/payment/paymentRoutes");

>>>>>>> 6feced58c8e1fa6a10568ae8b67f98e02d5a90ef
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(`[📥 ${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

app.use('/api', authRoutes);
app.use('/api',userRoutes);
app.use('/api',productroutes);
<<<<<<< HEAD
app.use('/api',BookingRoutes);
=======
app.use("/api/", paymentRoutes);
>>>>>>> 6feced58c8e1fa6a10568ae8b67f98e02d5a90ef
module.exports = app;