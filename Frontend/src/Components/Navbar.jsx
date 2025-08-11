import React, { useState } from "react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Pages/Redux/authslice";
import LoginPopup from "../Components/Login_signup/Login";
import SignUpPopup from "../Components/Login_signup/Signup";
import { toast } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

   const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

    const [profileOpen, setProfileOpen] = useState(false);

    
     return (
    <>
     <nav className="w-full bg-white text-black shadow-md px-4 md:px-8 py-3 flex items-center justify-between relative z-50">
  {/* Left: Logo */}
  <div className="flex items-center">
    <Link to="/" className="text-2xl font-extrabold tracking-tight text-gray-600">
      RM
    </Link>
  </div>

  {/* Center: Menu */}
  <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
    <li><Link to="/products" className="hover:text-blue-600">Products</Link></li>
    <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
    <li><Link to="/rental-products" className="hover:text-blue-600">Rental Products</Link></li>
  </ul>

  {/* Right: Icons & Auth */}
  <div className="flex items-center gap-5">
    {/* Cart */}
    <button className="relative bg-white p-2 rounded-full shadow hover:shadow-lg transition">
      <ShoppingBag onClick={()=>navigate('/cart')} className="w-5 h-5 text-black" />
    </button>

    {/* Auth */}
    {!user ? (
      <button
        className="text-sm font-medium hover:text-blue-600 border-2 border-gray-300 rounded-lg p-2"
        onClick={() => setShowLogin(true)}
      >
        Login
      </button>
    ) : (
      <div className="relative">
        <button
          onClick={() => setProfileOpen((prev) => !prev)}
          className="bg-blue-600 text-white font-bold rounded-full w-9 h-9 flex items-center justify-center"
        >
          {user.username.charAt(0).toUpperCase()}
        </button>

        {profileOpen && (
          <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg overflow-hidden">
            <Link
              to={`/profile/${user.email}`}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setProfileOpen(false)}
            >
              Profile
            </Link>
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                dispatch(logout());
                localStorage.removeItem("user");
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    )}
    
 <LoginPopup className="border-2 border-gray-300 rounded-lg"
                isOpen={showLogin}
                onClose={() => setShowLogin(false)}
                onSwitchToSignUp={() => {
                    setShowLogin(false);
                    setShowSignUp(true);
                }}
            />

            <SignUpPopup
                isOpen={showSignUp}
                onClose={() => setShowSignUp(false)}
                onSwitchToLogin={() => {
                    setShowSignUp(false);
                    setShowLogin(true);
                }}
            />
    {/* Mobile Menu Button */}
    <button
      className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  </div>
</nav>

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef();

  // Close profile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <>
      <nav className="w-full bg-white text-black shadow-md px-4 md:px-8 py-3 flex items-center justify-between relative z-50">
        {/* Left: Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-gray-600"
          onClick={() => setMenuOpen(false)}
        >
          RM
        </Link>

        {/* Center: Menu (Desktop) */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <Link to="/products" className="hover:text-blue-600">Products</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </li>
          <li>
            <Link to="/rental-products" className="hover:text-blue-600">Rental Products</Link>
          </li>
        </ul>

        {/* Right: Icons & Auth */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <button
            className="relative bg-white p-2 rounded-full shadow hover:shadow-lg transition"
            onClick={() => {
              navigate("/cart");
              setMenuOpen(false);
            }}
          >
            <ShoppingBag className="w-5 h-5 text-black" />
          </button>

          {/* Auth */}
          {!user ? (
            <button
              className="text-sm font-medium hover:text-blue-600"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          ) : (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen((prev) => !prev)}
                className="bg-blue-600 text-white font-bold rounded-full w-9 h-9 flex items-center justify-center hover:bg-blue-500 transition"
              >
                {user.username.charAt(0).toUpperCase()}
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg overflow-hidden animate-fadeIn">
                  <Link
                    to={`/profile/${user.email}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setProfileOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[64px] left-0 w-full bg-white shadow-lg z-40 animate-slideDown">
          <ul className="flex flex-col items-start p-4 space-y-4">
            <li>
              <Link to="/products" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Products</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Contact</Link>
            </li>
            <li>
              <Link to="/rental-products" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Rental Products</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Popups */}
      <LoginPopup
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onSwitchToSignUp={() => {
          setShowLogin(false);
          setShowSignUp(true);
        }}
      />

      <SignUpPopup
        isOpen={showSignUp}
        onClose={() => setShowSignUp(false)}
        onSwitchToLogin={() => {
          setShowSignUp(false);
          setShowLogin(true);
        }}
      />
    </>
  );
};

export default Navbar;




// import React, { useState } from "react";
// import { ShoppingBag, Search } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../Pages/Redux/authslice";
// import LoginPopup from "../Components/Login_signup/Login";
// import SignUpPopup from "../Components/Login_signup/Signup";

// const Navbar = () => {
//     const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);

//   // Popup states
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);

//   // Profile dropdown
//   const [profileOpen, setProfileOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleSearch = () => setSearchOpen(!searchOpen);


    
//     return (
//         <>
//             <nav className="w-full bg-white text-black flex items-center justify-between px-4 py-2 shadow relative">
//                 {/* Left Section */}
//                 <div className="flex items-center gap-8">
//                     <Link to="/" className="text-lg font-bold hidden md:block">
//                         RM
//                     </Link>

//                     {/* Mobile Hamburger */}
//                     <div className="flex items-center gap-3 relative md:hidden">
//                         <button
//                             className={`p-2 rounded-full hover:bg-gray-100 transition-transform duration-300 ${menuOpen ? "rotate-180" : ""
//                                 }`}
//                             onClick={toggleMenu}
//                         >
//                             <img
//                                 src="https://res.cloudinary.com/dzsvjyg2c/image/upload/Group_36_obgzcg.png"
//                                 alt="Menu"
//                                 className="w-6 h-6 object-contain"
//                             />
//                         </button>

//                         {/* Mobile Menu */}
//                         <div
//                             className={`overflow-hidden transition-all duration-500 ${menuOpen ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
//                                 }`}
//                         >
//                             <ul className="flex items-center gap-6 whitespace-nowrap pl-2">
//                                 <li><Link to="/products" className="hover:text-blue-600">Product</Link></li>
//                                 <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
//                                 <li><Link to="/rental-products" className="hover:text-blue-600">Rental Product</Link></li>
//                             </ul>
//                         </div>
//                     </div>


//                     {/* Desktop Menu */}
//                     <ul className="hidden md:flex items-center gap-6">
//                         <li><Link to="/products" className="hover:text-blue-600">Product</Link></li>
//                         <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
//                         <li><Link to="/rental-products" className="hover:text-blue-600">Rental Product</Link></li>
//                     </ul>

//                 </div>

//                 {/* Search Bar (desktop) */}
//                 <div className="hidden md:flex items-center bg-gray-100 rounded-full overflow-hidden w-full max-w-md">
//                     <input
//                         type="text"
//                         placeholder="Search rental products..."
//                         className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
//                     />
//                     <button className="px-4 text-gray-500 hover:text-black transition">
//                         <Search className="w-5 h-5" />
//                     </button>
//                 </div>

//                 {/* Search Icon (mobile) */}
//                 <div className="md:hidden">
//                     <button onClick={toggleSearch}>
//                         <Search className="w-5 h-5" />
//                     </button>
//                 </div>

//                 {/* Right Icons */}
//                 <div className="flex items-center gap-5 relative">
//                     {/* <button className="hover:text-gray-500 transition flex items-center gap-1">
//             <span className="text-sm tracking-wide">Cart</span>
//           </button> */}
//                     <button className="relative bg-white p-2 rounded-full shadow hover:shadow-md transition">
//                         <ShoppingBag onClick={()=>navigate('/cart')} className="w-5 h-5 text-black" />
//                     </button>

//                     {!user ? (
//                         <button
//                             className="hover:text-gray-500 transition"
//                             onClick={() => setShowLogin(true)}
//                         >
//                             Login
//                         </button>
//                     ) : (
//                         <div className="relative">
//                             <button
//                                 onClick={() => setProfileOpen((prev) => !prev)}
//                                 className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center"
//                             >
//                                 {user.username.charAt(0).toUpperCase()}
//                             </button>

//                             {profileOpen && (
//                                 <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-100">
//                                     <Link
//                                         to="/profile/:email"
//                                         className="block px-4 py-2 hover:bg-gray-100"
//                                         onClick={() => setProfileOpen(false)}
//                                     >
//                                         See Profile
//                                     </Link>
//                                     <button
//                                         className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                                         onClick={() => {
//                                             dispatch(logout()); // clears Redux state
//                                             localStorage.removeItem("user"); // also clears local storage if used
//                                             navigate("/"); // redirect to home
//                                         }}
//                                     >
//                                         Logout
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     )}
//                 </div>

//                 {/* Mobile Search Dropdown */}
//                 {searchOpen && (
//                     <div className="absolute top-full left-0 w-full bg-white p-3 shadow md:hidden">
//                         <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
//                             <input
//                                 type="text"
//                                 placeholder="Search rental products..."
//                                 className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
//                             />
//                             <button className="px-4 text-gray-500 hover:text-black transition">
//                                 <Search className="w-5 h-5" />
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </nav>

//             {/* Login Popup */}
//             <LoginPopup
//                 isOpen={showLogin}
//                 onClose={() => setShowLogin(false)}
//                 onSwitchToSignUp={() => {
//                     setShowLogin(false);
//                     setShowSignUp(true);
//                 }}
//             />

//             {/* Signup Popup */}
//             <SignUpPopup
//                 isOpen={showSignUp}
//                 onClose={() => setShowSignUp(false)}
//                 onSwitchToLogin={() => {
//                     setShowSignUp(false);
//                     setShowLogin(true);
//                 }}
//             />
//         </>
//     );
// };

// export default Navbar;