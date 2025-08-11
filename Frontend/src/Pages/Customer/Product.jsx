import React, { useState, useEffect } from "react";
import axios from "axios";

const categories = ["All", "Cars", "Electronics", "Sports", "Fashion", "Real Estate", "Gym", "Cycling", "Projectors"];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
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

  // Search logic only
  const searchedProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar Filter (UI only, no logic) */}
      <aside className="w-50 bg-white p-6 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        {/* Category Filter UI */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Category</h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className="block w-full text-left px-3 py-1 rounded hover:bg-gray-100"
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range Filter UI */}
        <div>
          <h3 className="font-medium mb-2">Max Price (₹)</h3>
          <input
            type="range"
            min="500"
            max="3000"
            step="100"
            className="w-full"
          />
          <p className="mt-1 text-sm text-gray-600">Up to ₹3000</p>
        </div>
      </aside>

      {/* Main Products Section */}
      <main className="flex-1 p-6 pb-50">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold tracking-wide">Available Products</h2>
          <p className="text-gray-500">Find the perfect rental for you</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-xl px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchedProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {/* Product Image */}
              {product.images && product.images.length > 0 && (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
              )}

              {/* Card Content */}
              <div className="p-4 flex-1 flex flex-col">
                {/* Title & Category */}
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-3 flex-1">
                  {product.description}
                </p>

                {/* Price */}
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
            </div>
          ))}
        </div>

        {searchedProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No products found.
          </p>
        )}
      </main>
    </div>
  );
};

export default Products;
