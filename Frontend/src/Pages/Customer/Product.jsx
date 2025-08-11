import React, { useState } from "react";

const allProducts = [
  {
    id: 1,
    img: "https://via.placeholder.com/400x500?text=Luxury+Car",
    title: "Luxury Car - BMW 5 Series",
    price: 2500,
    category: "Cars",
    duration: "Per Day",
  },
  {
    id: 2,
    img: "https://via.placeholder.com/400x500?text=Camera",
    title: "Canon DSLR Camera",
    price: 800,
    category: "Electronics",
    duration: "Per Day",
  },
  {
    id: 3,
    img: "https://via.placeholder.com/400x500?text=Trekking+Kit",
    title: "Full Trekking Gear Set",
    price: 500,
    category: "Sports",
    duration: "Per Day",
  },
  {
    id: 4,
    img: "https://via.placeholder.com/400x500?text=Macbook+Pro",
    title: "MacBook Pro M1",
    price: 1500,
    category: "Electronics",
    duration: "Per Day",
  },
  {
    id: 5,
    img: "https://via.placeholder.com/400x500?text=Wedding+Dress",
    title: "Designer Wedding Dress",
    price: 2000,
    category: "Fashion",
    duration: "Per Day",
  },
  {
    id: 6,
    img: "https://via.placeholder.com/400x500?text=Road+Bike",
    title: "Professional Road Bike",
    price: 700,
    category: "Sports",
    duration: "Per Day",
  },
];

const categories = ["All", "Cars", "Electronics", "Sports", "Fashion"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(3000);

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const priceMatch = product.price <= priceRange;
    return categoryMatch && priceMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar Filter */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Category</h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`block w-full text-left px-3 py-1 rounded ${
                    selectedCategory === cat
                      ? "bg-gray-100 text-black"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range Filter */}
        <div>
          <h3 className="font-medium mb-2">Max Price (₹)</h3>
          <input
            type="range"
            min="500"
            max="3000"
            step="100"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full"
          />
          <p className="mt-1 text-sm text-gray-600">Up to ₹{priceRange}</p>
        </div>
      </aside>

      {/* Main Products Section */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold tracking-wide">All Products</h2>
          <p className="text-gray-500">Find the perfect rental for you</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 flex flex-col"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-[350px] object-cover rounded-md"
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-lg font-medium">{product.title}</h3>
                  <p className="text-sm text-gray-500">{product.duration}</p>
                </div>
                <span className="text-blue-600 font-semibold">
                  ₹{product.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No products found for your filters.
          </p>
        )}
      </main>
    </div>
  );
};

export default Products;
