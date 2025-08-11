import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/manbagdw", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        alert("Message sent! 📧 Thanks for reaching out. I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("There was a problem sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred, but we’ll get back to you soon!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      {/* Main Contact Card */}
      <div className="w-full max-w-6xl overflow-hidden flex flex-col md:flex-row">
        {/* Left - Contact Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <p className="text-gray-500 mb-8">
            Have a question or feedback? Fill out the form and we’ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg text-lg font-medium"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right - Map */}
        <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-6">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29448.267603009055!2d72.5713623!3d23.0225052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f3420f0bcd%3A0x3b894b5d45fd6e2b!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1679648857756!5m2!1sen!2sin"
            className="w-full h-[400px] md:h-full rounded-lg border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 text-center">
        <div className="flex flex-col items-center">
          <MapPin className="w-6 h-6 text-blue-600 mb-2" />
          <h4 className="text-lg font-semibold text-gray-800">Location</h4>
          <p className="text-gray-500 mt-1">Rai University, Ahmedabad, Gujarat, India</p>
        </div>
        <div className="flex flex-col items-center">
          <Phone className="w-6 h-6 text-blue-600 mb-2" />
          <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
          <p className="text-gray-500 mt-1">+91 98765 43210</p>
        </div>
        <div className="flex flex-col items-center">
          <Mail className="w-6 h-6 text-blue-600 mb-2" />
          <h4 className="text-lg font-semibold text-gray-800">Email</h4>
          <p className="text-gray-500 mt-1">jatinrajwani@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
