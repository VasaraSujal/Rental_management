import React, { useState } from "react";
import axios from "axios";

const SignUpPopup = ({ isOpen, onClose, onUserAdded }) => {
  if (!isOpen) return null;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const [mobile, setMobile] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [role, setRole] = useState("customer");
  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    accountNumber: "",
    ifsc: "",
  });
  const [propertiesRented, setPropertiesRented] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (!username || !email || !password || !location || !mobile || !role) {
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        username,
        email,
        password,
        location,
        mobile,
        profilePhoto,
        role,
        bankDetails,
        propertiesRented,
      };

      const response = await axios.post(
        "http://localhost:5500/api/add",
        payload
      );

      setSuccess("User added successfully!");
      setLoading(false);
      onUserAdded && onUserAdded(response.data.userId);

      // Reset form fields
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setLocation("");
      setMobile("");
      setProfilePhoto("");
      setRole("customer");
      setBankDetails({ bankName: "", accountNumber: "", ifsc: "" });
      setPropertiesRented([]);

      // Close popup after delay
      setTimeout(() => onClose(), 2000);
    } catch (err) {
      setLoading(false);
      setError(
        err.response?.data?.message || "Failed to add user. Please try again."
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full flex overflow-hidden max-h-[90vh]">
        {/* Left Image */}
        <div className="hidden md:flex w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 items-center justify-center p-8">
          <img
            src="https://res.cloudinary.com/dzsvjyg2c/image/upload/undraw_access-account_aydp_wgiwhj.svg"
            alt="User Signup Illustration"
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-2/3 p-8 overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 md:relative md:top-0 md:right-0 bg-white/90 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow transition"
            aria-label="Close signup form"
          >
            ✕
          </button>

          <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900 border-b border-gray-200 pb-4">
            Add New User
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 border border-green-300 rounded">
              {success}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Username */}
            <input
              type="text"
              placeholder="Username *"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email *"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password *"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="Confirm Password *"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {/* Location */}
            <input
              type="text"
              placeholder="Location *"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            {/* Mobile */}
            <input
              type="tel"
              placeholder="Mobile *"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />

            {/* Profile Photo URL */}
            <input
              type="url"
              placeholder="Profile Photo URL"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={profilePhoto}
              onChange={(e) => setProfilePhoto(e.target.value)}
            />

            {/* Role */}
            <select
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
            </select>

            {/* Bank Details - spanning two columns */}
            <div className="sm:col-span-2 grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Bank Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={bankDetails.bankName}
                onChange={(e) =>
                  setBankDetails({ ...bankDetails, bankName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Account Number"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={bankDetails.accountNumber}
                onChange={(e) =>
                  setBankDetails({ ...bankDetails, accountNumber: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="IFSC Code"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={bankDetails.ifsc}
                onChange={(e) =>
                  setBankDetails({ ...bankDetails, ifsc: e.target.value })
                }
              />
            </div>

            {/* Properties Rented textarea */}
            <textarea
              placeholder="Properties Rented (comma separated IDs)"
              className="sm:col-span-2 border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              value={propertiesRented.join(",")}
              onChange={(e) =>
                setPropertiesRented(
                  e.target.value.split(",").map((id) => id.trim())
                )
              }
            />

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="sm:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 transition disabled:opacity-60"
            >
              {loading ? "Adding User..." : "Add User"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPopup;
