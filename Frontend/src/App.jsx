import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CuHome from "./Pages/Customer/CuHome";
import Footer from "./Components/Footer";
import Products from "./Pages/Customer/Product";

function App() {
    const [loginOpen, setLoginOpen] = useState(false);
  return (
    <BrowserRouter>
      {/* Navbar is always visible */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<CuHome />} />
        <Route path="/products" element={<Products />} />

      </Routes>

      {/* Footer is always visible */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
