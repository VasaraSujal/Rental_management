import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Pages/Redux/authstore"; // adjust path if needed

import Navbar from "./Components/Navbar";
import CuHome from "./Pages/Customer/CuHome";
import Footer from "./Components/Footer";
import Products from "./Pages/Customer/Product";
import Cart from "./Pages/cart/cart";
import Contact from "./Pages/Customer/Contact";
import UserProfileSection from "./Pages/Customer/UserProfileSection";
import ProductDetailPage from './Components/productpage/'
import { ToastContainer } from "react-toastify";
<<<<<<< HEAD
import BookingResponsePage from './pages/BookingResponsePage';
=======

// Stripe imports
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Components/CheckoutForm"; // New Checkout page
import PaymentSuccess from './Components/PaymentSuccess';

// Load Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51QzA2LKS3UqIJrTgrHvrBDYirStwZHOOq2XrnOjGCwGk5B9BMvynXpRCLUKKEsRHUSDuOkHdZku875rlNWpYpSZZ00ZKLqjASA");
>>>>>>> 6feced58c8e1fa6a10568ae8b67f98e02d5a90ef

function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />

        <Elements stripe={stripePromise}>
          <Routes>
            <Route path="/" element={<CuHome />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile/:email" element={<UserProfileSection />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} /> {/* Stripe Checkout page */}
            <Route path="/payment-success" element={<PaymentSuccess />} />

<<<<<<< HEAD
        {/* Routes */}
        <Routes>
          <Route path="/" element={<CuHome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:email" element={<UserProfileSection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/booking/:action/:bookingId" element={<BookingResponsePage />} />
        </Routes>
=======
          </Routes>
        </Elements>
>>>>>>> 6feced58c8e1fa6a10568ae8b67f98e02d5a90ef

        <Footer />
      </BrowserRouter>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </Provider>
  );
}

export default App;