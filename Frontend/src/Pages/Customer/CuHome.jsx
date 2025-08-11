import React, { useState, useEffect } from "react";

const slides = [
  {
    img: "https://res.cloudinary.com/dkombksnu/image/upload/android-project-house-rental-management-app_znj5gz.png",
    title: "Rent Luxury Cars",
    subtitle: "Drive your dream car today",
  },
  {
    img: "https://res.cloudinary.com/dkombksnu/image/upload/9k_1_ohg5wm.png",
    title: "High-Tech Electronics",
    subtitle: "Get the latest gadgets on rent",
  },
  {
    img: "https://res.cloudinary.com/dkombksnu/image/upload/Z_fxnqqw.png",
    title: "Sports Gear",
    subtitle: "Everything you need for your game",
  },
];


// const products = [
//   {
//     img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894798/WhatsApp_Image_2025-08-11_at_12.15.28_49d22fc5_vni3kf.jpg",
//     title: "Camouflage Oversized T-Shirt",
//   },
//   {
//     img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894798/WhatsApp_Image_2025-08-11_at_12.15.42_0878e935_rl1bzd.jpg",
//     title: "Slim Fit Beige Pants",
//   },
//   {
//     img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894799/WhatsApp_Image_2025-08-11_at_12.15.19_86fd1a2b_jfh9fi.jpg",
//     title: "Beige Oversized T-Shirt",
//   },
// ];
const products = [
  {
    img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894798/WhatsApp_Image_2025-08-11_at_12.15.42_0878e935_rl1bzd.jpg",
    title: "Camouflage Oversized T-Shirt",
    description: "Comfortable casual wear for all seasons",
    price: 150,
  },
  {
    img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894798/WhatsApp_Image_2025-08-11_at_12.15.28_49d22fc5_vni3kf.jpg",
    title: "Slim Fit Beige Pants",
    description: "Perfect fit with premium quality fabric",
    price: 200,
  },
  {
    img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894799/WhatsApp_Image_2025-08-11_at_12.15.19_86fd1a2b_jfh9fi.jpg",
    title: "Beige Oversized T-Shirt",
    description: "Trendy oversized design for a relaxed look",
    price: 180,
  },
  {
    img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894799/WhatsApp_Image_2025-08-11_at_12.15.19_86fd1a2b_jfh9fi.jpg",
    title: "Beige Oversized T-Shirt",
    description: "Trendy oversized design for a relaxed look",
    price: 180,
  },
  {
    img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894799/WhatsApp_Image_2025-08-11_at_12.15.19_86fd1a2b_jfh9fi.jpg",
    title: "Beige Oversized T-Shirt",
    description: "Trendy oversized design for a relaxed look",
    price: 180,
  },
];


const HomePage = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      {/* Hero Auto Slider */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-4">
              <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
              <p className="mt-2 text-lg">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </section>

      {/* Product Section */}
<section className="py-10 px-6 bg-white">
  {/* Section Header */}
  <div className="text-center mb-8">
    <h2 className="text-2xl font-semibold tracking-wide">New Arrivals</h2>
    <p className="text-gray-500">Fresh styles for your wardrobe</p>
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 max-w-8xl mx-auto">
    {products.map((product, idx) => (
      <div
        key={idx}
        className="bg-white flex flex-col hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg shadow-md"
      >
        {/* Product Image */}
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-[300px] object-cover rounded-t-lg"
        />

        {/* Product Info */}
        <div className="flex items-center justify-between p-4">
          {/* Left side: Title + Description */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
            <p className="text-gray-500 text-sm">{product.description}</p>
          </div>

          {/* Right side: Price */}
          <p className="text-lg font-bold text-gray-800 whitespace-nowrap">
            ₹{product.price}/day
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


    </div>
  );
};

export default HomePage;
