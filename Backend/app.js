const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./modules/auth/authRoutes');
const userRoutes = require('./modules/users/userRoutes');
const productroutes=require('./modules/products/productroutes')
const BookingRoutes = require('./modules/Booking/Bookingroutes');
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
app.use('/api',BookingRoutes);
module.exports = app;