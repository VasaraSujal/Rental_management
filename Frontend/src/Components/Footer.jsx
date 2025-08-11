import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
    <div className="w-full mx-auto px-20 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-300">
        
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 text-left">RentPro</h2>
          <p className="mt-2 text-sm text-left">
            The most reliable rental management service in your city. Book items easily, manage reservations, and enjoy hassle-free rentals from trusted providers.
          </p>
          <div className="flex gap-3 mt-4 text-gray-500">
            <a href="#" className="hover:text-gray-800"><Facebook size={18} /></a>
            <a href="#" className="hover:text-gray-800"><Twitter size={18} /></a>
            <a href="#" className="hover:text-gray-800"><Instagram size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold text-gray-900">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-800">About Us</a></li>
            <li><a href="#" className="hover:text-gray-800">Products</a></li>
            <li><a href="#" className="hover:text-gray-800">Popular Items</a></li>
            <li><a href="#" className="hover:text-gray-800">Promotions</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-md font-semibold text-gray-900">Support</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-800">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-800">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-800">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold text-gray-900">Contact</h3>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} /> +1 234 567 890</li>
            <li className="flex items-center gap-2"><Mail size={16} /> support@kinghub.com</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> 123 Rental Street, City, Country</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="py-4 text-xs text-right px-10 text-gray-500">
        © 2025 RentPro. All rights reserved.
      </div>
    </footer>
  );
}