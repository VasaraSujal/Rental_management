// import React, { useState, useEffect } from "react";

// const slides = [
//   {
//     img: "https://res.cloudinary.com/dkombksnu/image/upload/android-project-house-rental-management-app_znj5gz.png",
//     title: "Rent Luxury Cars",
//     subtitle: "Drive your dream car today",
//   },
//   {
//     img: "https://res.cloudinary.com/dkombksnu/image/upload/9k_1_ohg5wm.png",
//     title: "High-Tech Electronics",
//     subtitle: "Get the latest gadgets on rent",
//   },
//   {
//     img: "https://res.cloudinary.com/dkombksnu/image/upload/Z_fxnqqw.png",
//     title: "Sports Gear",
//     subtitle: "Everything you need for your game",
//   },
// ];


// // const products = [
// //   {
// //     img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894798/WhatsApp_Image_2025-08-11_at_12.15.28_49d22fc5_vni3kf.jpg",
// //     title: "Camouflage Oversized T-Shirt",
// //   },
// //   {
// //     img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894798/WhatsApp_Image_2025-08-11_at_12.15.42_0878e935_rl1bzd.jpg",
// //     title: "Slim Fit Beige Pants",
// //   },
// //   {
// //     img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894799/WhatsApp_Image_2025-08-11_at_12.15.19_86fd1a2b_jfh9fi.jpg",
// //     title: "Beige Oversized T-Shirt",
// //   },
// // ];
// const products = [
//   {
//     img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894798/WhatsApp_Image_2025-08-11_at_12.15.42_0878e935_rl1bzd.jpg",
//     title: "Camouflage Oversized T-Shirt",
//     description: "Comfortable casual wear for all seasons",
//     price: 150,
//   },
//   {
//     img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894798/WhatsApp_Image_2025-08-11_at_12.15.28_49d22fc5_vni3kf.jpg",
//     title: "Slim Fit Beige Pants",
//     description: "Perfect fit with premium quality fabric",
//     price: 200,
//   },
//   {
//     img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894799/WhatsApp_Image_2025-08-11_at_12.15.19_86fd1a2b_jfh9fi.jpg",
//     title: "Beige Oversized T-Shirt",
//     description: "Trendy oversized design for a relaxed look",
//     price: 180,
//   },
//   {
//     img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894799/WhatsApp_Image_2025-08-11_at_12.15.19_86fd1a2b_jfh9fi.jpg",
//     title: "Beige Oversized T-Shirt",
//     description: "Trendy oversized design for a relaxed look",
//     price: 180,
//   },
//   {
//     img: "https://res.cloudinary.com/dkombksnu/image/upload/v1754894799/WhatsApp_Image_2025-08-11_at_12.15.19_86fd1a2b_jfh9fi.jpg",
//     title: "Beige Oversized T-Shirt",
//     description: "Trendy oversized design for a relaxed look",
//     price: 180,
//   },
// ];


// const HomePage = () => {
//   const [current, setCurrent] = useState(0);

//   // Auto slide effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-[#F4F4F4] min-h-screen">
//       {/* Hero Auto Slider */}
//       <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === current ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//           >
//             <img
//               src={slide.img}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-4">
//               <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
//               <p className="mt-2 text-lg">{slide.subtitle}</p>
//             </div>
//           </div>
//         ))}

//         {/* Dots Navigation */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//           {slides.map((_, index) => (
//             <div
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-3 h-3 rounded-full cursor-pointer transition ${
//                 index === current ? "bg-white" : "bg-gray-400"
//               }`}
//             ></div>
//           ))}
//         </div>
//       </section>

//       {/* Product Section */}
// <section className="py-10 px-6 bg-white">
//   {/* Section Header */}
//   <div className="text-center mb-8">
//     <h2 className="text-2xl font-semibold tracking-wide">New Arrivals</h2>
//     <p className="text-gray-500">Fresh styles for your wardrobe</p>
//   </div>

//   {/* Product Grid */}
//   <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 max-w-8xl mx-auto">
//     {products.map((product, idx) => (
//       <div
//         key={idx}
//         className="bg-white flex flex-col hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg shadow-md"
//       >
//         {/* Product Image */}
//         <img
//           src={product.img}
//           alt={product.title}
//           className="w-full h-[300px] object-cover rounded-t-lg"
//         />

//         {/* Product Info */}
//         <div className="flex items-center justify-between p-4">
//           {/* Left side: Title + Description */}
//           <div>
//             <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
//             <p className="text-gray-500 text-sm">{product.description}</p>
//           </div>

//           {/* Right side: Price */}
//           <p className="text-lg font-bold text-gray-800 whitespace-nowrap">
//             ₹{product.price}/day
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>


//     </div>
//   );
// };

// export default HomePage;




import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Shield,
  Clock,
  Truck,
} from "lucide-react";

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

const whyChooseUsData = [
  {
    icon: Shield,
    title: "Trusted & Secure",
    description:
      "All equipment is insured and verified for quality and safety with 100% guarantee protection",
  },
  {
    icon: Clock,
    title: "Flexible Rentals",
    description:
      "Hourly, daily, weekly, or monthly rentals to perfectly fit your project timeline and needs",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description:
      "Professional-grade equipment from top brands you trust, maintained to perfection",
  },
  {
    icon: Truck,
    title: "Quick Delivery",
    description:
      "Fast pickup and delivery options with same-day service to suit your project needs",
  },
];

const customerTestimonials = [
  {
    quote:
      "RentalPro transformed our business operations! Their equipment is always in perfect condition and their support team goes above and beyond.",
    author: "Sarah Johnson",
    role: "Event Planner",
  },
  {
    quote:
      "Exceptional service and quality! RentalPro has made our projects so much easier with their reliable equipment and professional staff.",
    author: "Michael Chen",
    role: "Photography Studio",
  },
  {
    quote:
      "Best rental service in town! Professional staff, top-notch equipment, and competitive prices. Highly recommended for any project.",
    author: "Emily Davis",
    role: "Film Producer",
  },
  {
    quote:
      "Outstanding experience every time! Quick delivery, pristine equipment, and excellent customer service. They never disappoint.",
    author: "David Wilson",
    role: "Construction Manager",
  },
  {
    quote:
      "RentalPro is our go-to partner for all equipment needs. Their flexibility and quality have been game-changers for our business.",
    author: "Lisa Rodriguez",
    role: "Marketing Director",
  },
];

const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Auto slide effect for hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === customerTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? customerTestimonials.length - 1 : prev - 1
    );
  };

  const getPrevIndex = () => {
    return testimonialIndex === 0
      ? customerTestimonials.length - 1
      : testimonialIndex - 1;
  };

  const getNextIndex = () => {
    return testimonialIndex === customerTestimonials.length - 1
      ? 0
      : testimonialIndex + 1;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Auto Slider */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-b-3xl shadow-2xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105 z-0"
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Enhanced Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex flex-col justify-center items-start text-white p-8 md:p-16">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
                  {slide.subtitle}
                </p>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
                  Explore Now →
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Enhanced Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white w-8 shadow-lg"
                  : "bg-white/50 w-3 hover:bg-white/70"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            New Arrivals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of premium fashion pieces, carefully
            curated for the modern trendsetter
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-8xl mx-auto">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    View Details
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{product.price}
                    <span className="text-sm font-normal text-gray-500">
                      /day
                    </span>
                  </span>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Header */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Approach to
              <span className="block text-gray-700">Rental Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              At RentalPro, we deliver premium rental experiences with unmatched
              quality, reliability, and service. Every piece is meticulously
              maintained and delivered with care.
            </p>

            {/* Process Flow Graph */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-200  max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Our Seamless Rental Process
              </h3>

              {/* Desktop Flow */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Process Steps */}
                  <div className="flex justify-between items-center mb-8">
                    {/* Step 1 */}
                    <div className="group flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300">
                        <span className="text-white font-bold text-lg">1</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                        Browse & Select
                      </h4>
                      <p className="text-sm text-gray-600 max-w-32">
                        Choose from our premium collection
                      </p>
                    </div>

                    {/* Arrow 1 */}
                    <div className="flex-1 flex justify-center">
                      <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-500 border-y-2 border-y-transparent"></div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="group flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300">
                        <span className="text-white font-bold text-lg">2</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                        Quality Check
                      </h4>
                      <p className="text-sm text-gray-600 max-w-32">
                        Thorough inspection & sanitization
                      </p>
                    </div>

                    {/* Arrow 2 */}
                    <div className="flex-1 flex justify-center">
                      <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-500 border-y-2 border-y-transparent"></div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="group flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300">
                        <span className="text-white font-bold text-lg">3</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                        Fast Delivery
                      </h4>
                      <p className="text-sm text-gray-600 max-w-32">
                        Quick & secure delivery to your location
                      </p>
                    </div>

                    {/* Arrow 3 */}
                    <div className="flex-1 flex justify-center">
                      <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-500 border-y-2 border-y-transparent"></div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="group flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300">
                        <span className="text-white font-bold text-lg">4</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                        Enjoy & Return
                      </h4>
                      <p className="text-sm text-gray-600 max-w-32">
                        Use with confidence, return hassle-free
                      </p>
                    </div>
                  </div>

                  {/* Statistics Bar */}
                  <div className="grid grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-700">
                        99.8%
                      </div>
                      <div className="text-sm text-gray-600">Quality Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-700">
                        24hrs
                      </div>
                      <div className="text-sm text-gray-600">Avg Delivery</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-700">
                        10K+
                      </div>
                      <div className="text-sm text-gray-600">
                        Happy Customers
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-700">5★</div>
                      <div className="text-sm text-gray-600">
                        Average Rating
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Flow */}
              <div className="lg:hidden">
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Browse & Select
                      </h4>
                      <p className="text-sm text-gray-600">
                        Choose from our premium collection
                      </p>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center">
                    <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full relative">
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-t-gray-500 border-x-2 border-x-transparent"></div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Quality Check
                      </h4>
                      <p className="text-sm text-gray-600">
                        Thorough inspection & sanitization
                      </p>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center">
                    <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full relative">
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-t-gray-500 border-x-2 border-x-transparent"></div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Fast Delivery
                      </h4>
                      <p className="text-sm text-gray-600">
                        Quick & secure delivery to your location
                      </p>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center">
                    <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full relative">
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-t-gray-500 border-x-2 border-x-transparent"></div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Enjoy & Return
                      </h4>
                      <p className="text-sm text-gray-600">
                        Use with confidence, return hassle-free
                      </p>
                    </div>
                  </div>

                  {/* Mobile Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-200">
                    <div className="text-center p-3 bg-white rounded-xl">
                      <div className="text-xl font-bold text-gray-700">
                        99.8%
                      </div>
                      <div className="text-xs text-gray-600">Quality Rate</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-xl">
                      <div className="text-xl font-bold text-gray-700">
                        24hrs
                      </div>
                      <div className="text-xs text-gray-600">Avg Delivery</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-xl">
                      <div className="text-xl font-bold text-gray-700">
                        10K+
                      </div>
                      <div className="text-xs text-gray-600">
                        Happy Customers
                      </div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-xl">
                      <div className="text-xl font-bold text-gray-700">5★</div>
                      <div className="text-xs text-gray-600">
                        Average Rating
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-gray-700">RentalPro</span>?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're more than a rental service – we're your trusted partner in
              creating extraordinary experiences with professional-grade
              equipment and unparalleled support.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {whyChooseUsData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 lg:p-10 rounded-3xl border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-6 w-12 h-1 bg-gray-200 rounded-full mx-auto group-hover:bg-gray-900 group-hover:w-16 transition-all duration-300"></div>
                </div>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="mt-16">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg">
              Discover Our Products →
            </button>
          </div>
        </div>
      </section>
      {/* Customer Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it – hear from our satisfied
              customers who trust us with their projects
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative flex items-center justify-center">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 lg:left-0 z-20 p-4 rounded-full bg-white shadow-xl hover:shadow-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>

            {/* Testimonials Container */}
            <div className="flex items-center justify-center w-full overflow-hidden">
              {/* Previous Testimonial (Partial) */}
              <div className="w-1/4 opacity-40 transform scale-75 hidden lg:block">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg mx-2">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    "{customerTestimonials[getPrevIndex()].quote}"
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-800 text-sm">
                      {customerTestimonials[getPrevIndex()].author}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {customerTestimonials[getPrevIndex()].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Current Testimonial (Full) */}
              <div className="w-full lg:w-1/2 transform scale-100">
                <div className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-200 shadow-2xl mx-2">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg lg:text-xl mb-8 leading-relaxed italic">
                    "{customerTestimonials[testimonialIndex].quote}"
                  </p>
                  <div className="text-center">
                    <p className="font-bold text-gray-900 text-lg">
                      {customerTestimonials[testimonialIndex].author}
                    </p>
                    <p className="text-gray-600">
                      {customerTestimonials[testimonialIndex].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Next Testimonial (Partial) */}
              <div className="w-1/4 opacity-40 transform scale-75 hidden lg:block">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg mx-2">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    "{customerTestimonials[getNextIndex()].quote}"
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-800 text-sm">
                      {customerTestimonials[getNextIndex()].author}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {customerTestimonials[getNextIndex()].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 lg:right-0 z-20 p-4 rounded-full bg-white shadow-xl hover:shadow-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 gap-2">
            {customerTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setTestimonialIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === testimonialIndex
                    ? "bg-gray-900 w-8"
                    : "bg-gray-300 w-3 hover:bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;