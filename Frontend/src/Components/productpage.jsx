import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Car, 
  Sofa, 
  Phone, 
  Mail, 
  Calendar,
  CheckCircle,
  Clock,
  XCircle,
  Star,
  Wifi,
  Tv,
  Coffee,
  Utensils
} from 'lucide-react';
import BookingForm from './BookingForm'; // Adjust the import based on your file structure
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const userEmail = useSelector((state) => state.auth.user.email);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5500/api/product/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getAvailabilityBadge = (status) => {
    const badges = {
      'Available': 'bg-green-100 text-green-800 border-green-200',
      'Occupied': 'bg-red-100 text-red-800 border-red-200',
      'Coming Soon': 'bg-amber-100 text-amber-800 border-amber-200'
    };
    
    const icons = {
      'Available': <CheckCircle className="w-4 h-4" />,
      'Occupied': <XCircle className="w-4 h-4" />,
      'Coming Soon': <Clock className="w-4 h-4" />
    };

    return (
      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${badges[status]}`}>
        {icons[status]}
        {status}
      </span>
    );
  };

  const featureIcons = {
    bedrooms: <Bed className="w-5 h-5 text-blue-600" />,
    bathrooms: <Bath className="w-5 h-5 text-blue-600" />,
    area: <Square className="w-5 h-5 text-blue-600" />,
    parking: <Car className="w-5 h-5 text-blue-600" />,
    furnished: <Sofa className="w-5 h-5 text-blue-600" />,
    wifi: <Wifi className="w-5 h-5 text-blue-600" />,
    tv: <Tv className="w-5 h-5 text-blue-600" />,
    kitchen: <Utensils className="w-5 h-5 text-blue-600" />,
    balcony: <Coffee className="w-5 h-5 text-blue-600" />
  };

  const BookingModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="max-w-2xl w-full mx-4">
          <BookingForm 
            product={product}
            ownerEmail={product.owneremail} // Pass owner email directly
            senderEmail={userEmail}    // Pass sender email from Redux
            onClose={onClose}
          />
        </div>
      </div>
    );
  };

  if (loading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-xl font-semibold text-gray-700">Loading...</div>
  </div>;

  if (error) return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-xl font-semibold text-red-600">{error}</div>
  </div>;

  if (!product) return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-xl font-semibold text-gray-700">Product not found</div>
  </div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2 text-red-500" />
              <span className="text-lg">{product.location}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Description */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="p-4">
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden ${
                          selectedImage === index 
                            ? 'ring-2 ring-blue-500 ring-offset-2' 
                            : 'hover:opacity-80'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`View ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Property</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>
          </div>

          {/* Right Column - Price and Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
                {/* Price */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900">
                    {formatPrice(product.pricepermonth)}
                    <span className="text-lg font-normal text-gray-500">/month</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button 
                    onClick={() => setShowBookingForm(true)} 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg"
                  >
                    <Calendar className="w-5 h-5 inline mr-2" />
                    Book Now
                  </button>
                  
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-4 rounded-lg border border-gray-300">
                    <Phone className="w-5 h-5 inline mr-2" />
                    Contact Owner
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    Property ID: #{product._id}
                  </p>
                  <p className="text-sm text-gray-500 text-center mt-1">
                    Category: {product.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BookingModal 
          isOpen={showBookingForm}
          onClose={() => setShowBookingForm(false)}
        />
      </div>

      <Toaster position="top-center" />
    </div>
  );
};

export default ProductDetailPage;