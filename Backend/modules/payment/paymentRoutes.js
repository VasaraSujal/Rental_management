const express = require("express");
const router = express.Router();

// Remove the dotenv config from here since it's already loaded in index.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Debug logs
console.log("Stripe key loaded?", process.env.STRIPE_SECRET_KEY ? "YES" : "NO");
console.log("Stripe key starts with:", process.env.STRIPE_SECRET_KEY?.slice(0, 7));

router.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body; // Amount in cents

    if (!amount || isNaN(amount)) {
      return res.status(400).json({ error: "Invalid or missing amount" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd", // Change to your currency
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Stripe Payment Error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;