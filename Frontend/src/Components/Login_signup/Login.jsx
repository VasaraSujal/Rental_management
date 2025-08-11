import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Pages/Redux/authslice"; // Import Redux action

const LoginPopup = ({ isOpen, onClose, onSwitchToSignUp }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://rental-management-20jo.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      // Store in Redux + localStorage
      dispatch(login({ user: data.user, token: data.token }));

      onClose(); // Close popup
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-3 text-center">Login</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded px-4 py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded px-4 py-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={onSwitchToSignUp}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
