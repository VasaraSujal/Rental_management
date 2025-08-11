import React, { useState } from "react";

const allProducts = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=400&q=90", // BMW 5 Series luxury car, side view
    title: "Luxury Car - BMW 5 Series",
    description:
      "Luxury BMW 5 Series sedan, perfect for weddings, events, or long drives.",
    price: 2500,
    category: "Cars",
    duration: "Per Day",
    available: 2,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=90", // DSLR camera on wooden table
    title: "Canon DSLR Camera",
    description:
      "Professional DSLR camera with multiple lenses, great for photography.",
    price: 800,
    category: "Electronics",
    duration: "Per Day",
    available: 4,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=90", // Camping and trekking gear outdoors
    title: "Full Trekking Gear Set",
    description:
      "Complete trekking set with tent, sleeping bag, cooking kit, and more.",
    price: 500,
    category: "Sports",
    duration: "Per Day",
    available: 5,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=90", // MacBook Pro on desk with coffee
    title: "MacBook Pro M1",
    description:
      "High-performance MacBook Pro M1 for work, editing, and design.",
    price: 1500,
    category: "Electronics",
    duration: "Per Day",
    available: 3,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=90", // Elegant wedding dress on mannequin
    title: "Designer Wedding Dress",
    description:
      "Elegant designer wedding dress for your special day.",
    price: 2000,
    category: "Fashion",
    duration: "Per Day",
    available: 1,
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=400&q=90", // Road bike on city street
    title: "Professional Road Bike",
    description:
      "Lightweight road bike designed for speed and comfort.",
    price: 700,
    category: "Sports",
    duration: "Per Day",
    available: 6,
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
          <h2 className="text-2xl font-semibold tracking-wide">Available Products</h2>
          <p className="text-gray-500">Find the perfect rental for you</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {/* Product Image */}
              <img
                src={product.img}
                alt={product.title}
                className="h-48 w-full object-cover"
              />

              {/* Card Content */}
              <div className="p-4 flex-1 flex flex-col">
                {/* Title & Category */}
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-3 flex-1">
                  {product.description}
                </p>

                {/* Availability */}
                <p className="text-sm text-gray-700 mb-3">
                  Available: {product.available} items
                </p>

                {/* Price & Add to Cart */}
                <div className="flex items-center justify-between">
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>{product.duration}</option>
                    <option>Per hour</option>
                  </select>
                  <span className="text-lg font-bold">₹{product.price}</span>
                </div>

                <button className="mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  Add to Cart
                </button>
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
