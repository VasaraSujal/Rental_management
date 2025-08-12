import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const BookingForm = ({ product, ownerEmail, senderEmail, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    from: '',
    to: '',
    description: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!senderEmail || !product._id || !ownerEmail) {
      toast.error('Missing required information');
      return;
    }

    const bookingData = {
      property_id: product._id,
      owneremail: ownerEmail,
      name: formData.name,
      rent: product.pricepermonth,
      from: formData.from,
      to: formData.to,
      description: formData.description || '',
      mobile: formData.mobile,
      email: senderEmail // sender's email
    };

    try {
      const response = await fetch('http://localhost:5500/api/form/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create booking');
      }

      toast.success('Booking request sent successfully!');
      onClose();
    } catch (error) {
      toast.error(error.message || 'Failed to create booking');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Book Property</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile</label>
          <input
            type="tel"
            name="mobile"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">From Date</label>
          <input
            type="date"
            name="from"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.from}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">To Date</label>
          <input
            type="date"
            name="to"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.to}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-2 px-4 rounded-lg border border-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Submit Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;