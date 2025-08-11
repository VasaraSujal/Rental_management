import React, { useState } from "react";
import { Heart, ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-white text-black flex items-center justify-between px-4 py-2 shadow">
      {/* Logo - visible only on md and larger */}
      <h1 className="text-lg font-bold hidden md:block">RM</h1>

      {/* ===== Mobile Hamburger + Slide Row ===== */}
      <div className="flex items-center gap-3 relative md:hidden">
        {/* Hamburger Button */}
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

        {/* Smooth Horizontal Sliding Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          <ul className="flex items-center gap-6 whitespace-nowrap pl-2">
            <li className="cursor-pointer hover:text-blue-600 transition-colors">Product</li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors">Contact</li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors">Rental Product</li>
          </ul>
        </div>
      </div>

      {/* ===== Desktop Menu ===== */}
      <ul className="hidden md:flex items-center gap-8">
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Product</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Contact</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Rental Product</li>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-5">


        <button className="hover:text-gray-500 transition flex items-center gap-1">
          <span className="text-sm tracking-wide">Cart</span>
        </button>

        <button className="relative bg-white p-2 rounded-full shadow hover:shadow-md transition">
          <ShoppingBag className="w-5 h-5 text-black" />
        </button>

        <button className="hover:text-gray-500 transition">
          <User className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
