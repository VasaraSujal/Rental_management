import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CuHome from "./Pages/Customer/CuHome";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar is always visible */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<CuHome />} />

      </Routes>

      {/* Footer is always visible */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
