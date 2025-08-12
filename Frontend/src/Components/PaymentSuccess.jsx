import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { paymentIntent, orderDetails } = location.state || {};

  if (!paymentIntent || !orderDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Invalid Access</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-gray-900 text-white px-6 py-2 rounded-lg"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been processed successfully.
          </p>
          
          {/* Order Items */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h2 className="font-semibold mb-3 text-center">Order Details</h2>
            
            {/* Items List */}
            <div className="space-y-2 mb-4">
              {orderDetails.items.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            
            <hr className="my-3" />
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Payment ID:</span>
                <span className="font-mono text-xs">{paymentIntent.id}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total Paid:</span>
                <span>₹{orderDetails.total}</span>
              </div>
              <div className="flex justify-between">
                <span>Items:</span>
                <span>{orderDetails.items.length} item(s)</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-green-600 font-semibold">Confirmed</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Method:</span>
                <span>Card Payment</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-blue-700">
              📧 A confirmation email has been sent to your registered email address with order details and receipt.
            </p>
          </div>

          <div className="space-y-3">
            <button 
              onClick={() => navigate('/products')}
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Continue Shopping
            </button>
            <button 
              onClick={() => navigate('/')}
              className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Go to Home
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Need help? Contact our support team at support@yourstore.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;