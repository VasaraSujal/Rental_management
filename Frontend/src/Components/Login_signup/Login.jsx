import React, { useState } from "react";

const LoginPopup = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      {/* Main Popup */}
      <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/70 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow-md transition"
        >
          ✕
        </button>

        {/* Left - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg text-lg font-medium"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center mt-4 text-gray-500">
            Don’t have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">Sign Up</span>
          </p>
        </div>

        {/* Right - Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-50 py-10">
          <img
            src="https://res.cloudinary.com/dzsvjyg2c/image/upload/undraw_access-account_aydp_wgiwhj.svg"
            alt="Login Illustration"
            className="w-4/5 h-auto" // Reduced from w-4/5 to w-3/5
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
