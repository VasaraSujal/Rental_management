import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MainLayout from '../components/layout/main-layout';
import { Button } from '../components/ui/button';
import { CheckCircle, ArrowRight, FileText, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OrderConfirmationPage() {
  const navigate = useNavigate();

  // Generate random order ID
  const orderId = ORD-`${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/products');
    }, 60000); // 1 minute

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-lg border p-8 text-center"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 0.2
              }}
              className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center"
            >
              <CheckCircle className="h-12 w-12 text-green-600" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-gray-600 mb-8">
              Your rental has been successfully placed and confirmed.
            </p>

            <div className="bg-blue-50 rounded-lg p-4 mb-8">
              <p className="text-gray-700 mb-1">Order Reference:</p>
              <p className="text-xl font-bold text-blue-700">{orderId}</p>
              <p className="text-sm text-gray-500 mt-1">
                Please save this reference number for your records.
              </p>
            </div>

            <div className="space-y-2 text-left mb-8">
              <h3 className="font-semibold">What's Next?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mr-2 mt-0.5">
                    1
                  </div>
                  <span className="text-gray-700">
                    A confirmation email has been sent to your registered email address
                    with all the details of your order.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mr-2 mt-0.5">
                    2
                  </div>
                  <span className="text-gray-700">
                    You can pick up your rental items at our location on the selected date.
                    Don't forget to bring your ID and the payment method used for the order.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mr-2 mt-0.5">
                    3
                  </div>
                  <span className="text-gray-700">
                    You'll receive reminders before your return date. Make sure to return
                    the items on time to avoid late fees.
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/my-rentals">
                  <FileText className="mr-2 h-4 w-4" />
                  View My Rentals
                </Link>
              </Button>
              <Button asChild>
                <Link to="/products">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Return Home
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </MainLayout>
  );
}