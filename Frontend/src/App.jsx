import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Pages/Redux/authstore";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Customer/CuHome";
import Products from "./Pages/Customer/Product";
// import Contact from "./Pages/Customer";
// import RentalProducts from "./Pages/RentalProducts";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/rental-products" element={<RentalProducts />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
