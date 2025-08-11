// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const categories = ["All", "Cars", "Electronics", "Sports", "Fashion", "Real Estate", "Gym", "Cycling", "Projectors"];

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Fetch products from backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:5500/api/products");
//         setProducts(res.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // Search logic only
//   const searchedProducts = products.filter((product) =>
//     product.name?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return <p className="text-center mt-10">Loading products...</p>;
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen flex">
//       {/* Sidebar Filter (UI only, no logic) */}
//       <aside className="w-50 bg-white p-6 hidden md:block">
//         <h2 className="text-lg font-semibold mb-4">Filters</h2>

//         {/* Category Filter UI */}
//         <div className="mb-6">
//           <h3 className="font-medium mb-2">Category</h3>
//           <ul className="space-y-2">
//             {categories.map((cat) => (
//               <li key={cat}>
//                 <button
//                   className="block w-full text-left px-3 py-1 rounded hover:bg-gray-100"
//                 >
//                   {cat}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Price Range Filter UI */}
//         <div>
//           <h3 className="font-medium mb-2">Max Price (₹)</h3>
//           <input
//             type="range"
//             min="500"
//             max="3000"
//             step="100"
//             className="w-full"
//           />
//           <p className="mt-1 text-sm text-gray-600">Up to ₹3000</p>
//         </div>
//       </aside>

//       {/* Main Products Section */}
//       <main className="flex-1 p-6 pb-50">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h2 className="text-2xl font-semibold tracking-wide">Available Products</h2>
//           <p className="text-gray-500">Find the perfect rental for you</p>
//         </div>

//         {/* Search Bar */}
//         <div className="mb-8 flex justify-center">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full max-w-xl px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
//           />
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {searchedProducts.map((product) => (
//             <div
//               key={product._id}
//               className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
//             >
//               {/* Product Image */}
//               {product.images && product.images.length > 0 && (
//                 <img
//                   src={product.images[0]}
//                   alt={product.name}
//                   className="h-48 w-full object-cover"
//                 />
//               )}

//               {/* Card Content */}
//               <div className="p-4 flex-1 flex flex-col">
//                 {/* Title & Category */}
//                 <div className="flex justify-between items-start mb-2">
//                   <h2 className="text-lg font-semibold">{product.name}</h2>
//                   <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
//                     {product.category}
//                   </span>
//                 </div>

//                 {/* Description */}
//                 <p className="text-sm text-gray-500 mb-3 flex-1">
//                   {product.description}
//                 </p>

//                 {/* Price */}
//                 <div className="flex items-center justify-between">
//                   <span className="text-lg font-bold">
//                     ₹{product.price || product.pricepermonth}
//                   </span>
//                   <span className="text-sm text-gray-600">Per Month</span>
//                 </div>

//                 <button className="mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {searchedProducts.length === 0 && (
//           <p className="text-center text-gray-500 mt-8">
//             No products found.
//           </p>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Products;


import React, { useState, useEffect } from "react";
import axios from "axios";
<<<<<<< HEAD
import { useSelector } from "react-redux";

const categories = [
  "All",
  "Cars",
  "Electronics",
  "Sports",
  "Fashion",
  "Real Estate",
  "Gym",
  "Cycling",
  "Projectors"
=======
import HashLoader from "react-spinners/HashLoader"; // stylish loader

// Categories
const categories = [
  "All", "Cars", "Electronics", "Sports", "Fashion",
  "Real Estate", "Gym", "Cycling", "Projectors"
>>>>>>> befb970c693d9b46810c04d0bafd0dbef3c4dab1
];

const Products = () => {
  const user = useSelector((state) => state.auth.user);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(3000);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(50000);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
console.log(user)
=======
  const [suggestions, setSuggestions] = useState([]);

  // Handle search & suggestions
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      const filtered = products
        .filter((p) =>
          p.name?.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5);
      setSuggestions(filtered);
    }
  };

  const handleSuggestionClick = (name) => {
    setSearchTerm(name);
    setSuggestions([]);
  };

  // Fetch products
>>>>>>> befb970c693d9b46810c04d0bafd0dbef3c4dab1
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5500/api/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

<<<<<<< HEAD
  const handleAddToCart = async (product) => {
    if (!user) {
      alert("Please login first to add products to cart.");
      return;
    }

    // Validate required fields
    if (!user.email) {
      alert("Email is missing!");
      return;
    }
    if (!product._id) {
      alert("Product ID is missing!");
      return;
    }
    if (!product.name) {
      alert("Product name is missing!");
      return;
    }
    if (!product.category) {
      alert("Product category is missing!");
      return;
    }
    if (!(product.price || product.pricepermonth)) {
      alert("Product price is missing!");
      return;
    }

    const cartData = {
      email: user.email,  // Changed from userId to email
      productId: product._id,
      quantity: 1,
      name: product.name,
      price: product.price || product.pricepermonth,
      category: product.category,
      images: product.images || []
    };

    console.log("Cart Data being sent:", cartData); // Debug log

    try {
      const response = await axios.post("http://localhost:5500/api/addincart", cartData);
      console.log("Server response:", response.data);
      alert(`Added ${product.name} to cart!`);
    } catch (error) {
      console.error("Add to cart failed:", error.response?.data || error);
      alert(`Failed to add product to cart: ${error.response?.data?.message || error.message}`);
    }
  };

  // const filteredProducts = products.filter((product) => {
  //   const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
  //   const priceMatch = (product.price || product.pricepermonth || 0) <= priceRange;
  //   const searchMatch = product.name?.toLowerCase().includes(searchTerm.toLowerCase());
  //   return categoryMatch && priceMatch && searchMatch;
  // });

  if (loading) return <p className="text-center mt-10">Loading products...</p>;

  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar Filter */}
      <aside className="w-50 bg-white p-6 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

=======
  // Apply filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      !searchTerm || product.name?.toLowerCase().includes(searchTerm.toLowerCase());

    const category = product.category || "All";
    const matchesCategory =
      selectedCategory === "All" || category === selectedCategory;

    const productPrice = product.price || product.pricepermonth || 0;
    const matchesPrice = productPrice <= priceRange;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Loader display
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <HashLoader color="#2563eb" size={80} speedMultiplier={1.2} />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-60 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        {/* Category */}
>>>>>>> befb970c693d9b46810c04d0bafd0dbef3c4dab1
        <div className="mb-6">
          <h3 className="font-medium mb-2">Category</h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
<<<<<<< HEAD
                  className={`block w-full text-left px-3 py-1 rounded ${
                    selectedCategory === cat ? "bg-gray-100 text-black" : "hover:bg-gray-100"
=======
                  className={`block w-full text-left px-3 py-1 rounded transition ${
                    selectedCategory === cat
                      ? "bg-gray-300 text-black"
                      : "hover:bg-gray-100"
>>>>>>> befb970c693d9b46810c04d0bafd0dbef3c4dab1
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

<<<<<<< HEAD
=======
        {/* Price */}
>>>>>>> befb970c693d9b46810c04d0bafd0dbef3c4dab1
        <div>
          <h3 className="font-medium mb-2">Max Price (₹)</h3>
          <input
            type="range"
            min="100"
            max="50000"
            step="100"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full"
          />
<<<<<<< HEAD
          <p className="mt-1 text-sm text-gray-600">Up to ₹{priceRange}</p>
=======
          <p className="mt-1 text-sm text-gray-700 font-medium">
            Up to ₹{priceRange}
          </p>
>>>>>>> befb970c693d9b46810c04d0bafd0dbef3c4dab1
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold tracking-wide">Available Products</h2>
          <p className="text-gray-500">Find the perfect rental for you</p>
        </div>

        {/* Search & Suggestions */}
        <div className="mb-8 flex flex-col items-center relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full max-w-xl px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          {suggestions.length > 0 && (
            <ul className="absolute top-full mt-1 w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              {suggestions.map((s) => (
                <li
                  key={s._id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(s.name)}
                >
                  {s.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<<<<<<< HEAD
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {/* Product Image */}
              {product.images && product.images.length > 0 ? (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
=======
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-48 w-full object-cover"
                  />
                ) : (
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
>>>>>>> befb970c693d9b46810c04d0bafd0dbef3c4dab1

                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mb-3 flex-1 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">
                      ₹{product.price || product.pricepermonth}
                    </span>
                    <span className="text-sm text-gray-600">Per Month</span>
                  </div>

                  <button className="mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
<<<<<<< HEAD

                {/* Description */}
                <p className="text-sm text-gray-500 mb-3 flex-1">{product.description}</p>

                {/* Price & Duration */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">₹{product.price || product.pricepermonth}</span>
                  <span className="text-sm text-gray-600">Per Month</span>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
=======
>>>>>>> befb970c693d9b46810c04d0bafd0dbef3c4dab1
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-8">
              No products match your filters.
            </p>
          )}
        </div>
<<<<<<< HEAD

        {products.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No products found for your filters.</p>
        )}
=======
>>>>>>> befb970c693d9b46810c04d0bafd0dbef3c4dab1
      </main>
    </div>
  );
};

export default Products;
