import React, { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  
  const [loading, setLoading] = useState(false);
  const [checkoutData, setCheckoutData] = useState(null);

  useEffect(() => {
    // Get checkout data from sessionStorage
    const storedCheckoutData = sessionStorage.getItem('checkoutData');
    if (storedCheckoutData) {
      setCheckoutData(JSON.parse(storedCheckoutData));
    } else {
      // If no checkout data, redirect back to cart
      toast.error('No checkout data found. Please try again.');
      navigate('/cart');
    }
  }, [navigate]);

  const clearCart = async () => {
    try {
      if (user?.email) {
        // Clear the user's cart after successful payment
        await axios.delete(`http://localhost:5500/api/cart/clear/${user.email}`);
      }
    } catch (error) {
      console.error('Failed to clear cart:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements || !checkoutData) {
      return;
    }

    setLoading(true);

    try {
      const cardElement = elements.getElement(CardElement);

      // Confirm the payment with Stripe
      const result = await stripe.confirmCardPayment(checkoutData.clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: user?.username || 'Customer',
            email: user?.email || '',
          },
        },
      });

      if (result.error) {
        console.error("Payment error:", result.error);
        toast.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          toast.success("Payment successful!");
          
          // Clear the cart after successful payment
          await clearCart();
          
          // Clear checkout data from session storage
          sessionStorage.removeItem('checkoutData');
          
          // Redirect to success page or home
          navigate('/payment-success', {
            state: {
              paymentIntent: result.paymentIntent,
              orderDetails: checkoutData.orderDetails
            }
          });
        }
      }
    } catch (error) {
      console.error("Error during payment:", error);
      toast.error("Payment failed: " + error.message);
    }

    setLoading(false);
  };

  if (!checkoutData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const { orderDetails } = checkoutData;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-2xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              {orderDetails.items.map((item) => (
                <div key={item.productId} className="flex justify-between items-center">
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-600">Qty: {item.quantity} × ₹{item.price}</p>
                  </div>
                  <span className="font-medium">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            
            <hr className="my-4" />
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal ({orderDetails.items.length} items)</span>
                <span>₹{orderDetails.total}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Tax</span>
                <span>Included</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Amount</span>
                <span>₹{orderDetails.total}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Information
                </label>
                <div className="border rounded-md p-3">
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: '16px',
                          color: '#424770',
                          '::placeholder': {
                            color: '#aab7c4',
                          },
                        },
                        invalid: {
                          color: '#9e2146',
                        },
                      },
                    }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm text-gray-600">
                    <strong>Billing to:</strong> {user?.username || 'Customer'}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Email:</strong> {user?.email || 'N/A'}
                  </p>
                </div>
              </div>

              <div className="mb-4 p-3 bg-blue-50 rounded-md">
                <p className="text-sm text-blue-700">
                  <strong>💳 Secure Payment</strong><br />
                  Your payment is processed securely. All transactions are encrypted and protected.
                </p>
              </div>

              <button
                type="submit"
                disabled={!stripe || loading}
                className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white py-3 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                    Processing Payment...
                  </>
                ) : (
                  `Pay ₹${orderDetails.total}`
                )}
              </button>

              <button
                type="button"
                onClick={() => navigate('/cart')}
                className="w-full mt-3 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-md transition-colors"
              >
                Back to Cart
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                By proceeding, you agree to our Terms & Conditions and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}