import React, { useState } from "react";
import { ShoppingBag, User, Search } from "lucide-react";
import { Link } from "react-router-dom";
import LoginPopup from "../Components/Login_signup/Login"; // we'll create this below

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // login state
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  const handleLogin = (email, password) => {
    // You can replace this with API authentication later
    if (email && password) {
      setIsLoggedIn(true);
      setShowLoginPopup(false);
    }
  };

  return (
    <>
      <nav className="w-full bg-white text-black flex items-center justify-between px-4 py-2 shadow relative">
        {/* Left Section - RM logo + options */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-lg font-bold hidden md:block">
            RM
          </Link>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-3 relative md:hidden">
            <button
              className={`p-2 rounded-full hover:bg-gray-100 transition-transform duration-300 ${
                menuOpen ? "rotate-180" : ""
              }`}
              onClick={toggleMenu}
            >
              <img
                src="https://res.cloudinary.com/dzsvjyg2c/image/upload/Group_36_obgzcg.png"
                alt="Menu"
                className="w-6 h-6 object-contain"
              />
            </button>

            {/* Mobile Menu */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                menuOpen ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              <ul className="flex items-center gap-6 whitespace-nowrap pl-2">
                <li><Link to="/products" className="hover:text-blue-600">Product</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
                <li><Link to="/rental-products" className="hover:text-blue-600">Rental Product</Link></li>
              </ul>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            <li><Link to="/products" className="hover:text-blue-600">Product</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            <li><Link to="/rental-products" className="hover:text-blue-600">Rental Product</Link></li>
          </ul>
        </div>

        {/* Search Bar (desktop) */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full overflow-hidden w-full max-w-md">
          <input
            type="text"
            placeholder="Search rental products..."
            className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
          />
          <button className="px-4 text-gray-500 hover:text-black transition">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Search Icon (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleSearch}>
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button className="hover:text-gray-500 transition flex items-center gap-1">
            <span className="text-sm tracking-wide">Cart</span>
          </button>
          <button className="relative bg-white p-2 rounded-full shadow hover:shadow-md transition">
            <ShoppingBag className="w-5 h-5 text-black" />
          </button>

          {/* Show Login button if not logged in, else Profile icon */}
          {!isLoggedIn ? (
            <button
              className="hover:text-gray-500 transition"
              onClick={() => setShowLoginPopup(true)}
            >
              Login
            </button>
          ) : (
            <button className="hover:text-gray-500 transition">
              <User className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Mobile Search Dropdown */}
        {searchOpen && (
          <div className="absolute top-full left-0 w-full bg-white p-3 shadow md:hidden">
            <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search rental products..."
                className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
              />
              <button className="px-4 text-gray-500 hover:text-black transition">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Login Popup */}
      <LoginPopup
        isOpen={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Navbar;
