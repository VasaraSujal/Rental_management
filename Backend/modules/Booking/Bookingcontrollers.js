const { getDB } = require('../../config/db');
const { ObjectId } = require('mongodb');
const transporter = require('../mail/mailtransporter');

const generateform = async (req, res) => {
  try {
    const db = getDB();
    const {
      owneremail, // property owner's email
      name,       // sender's name
      rent,
      from,
      to,
      description,
      mobile,
      email,      // sender's email
      property_id
    } = req.body;

    // Debug logging
    console.log('Request body:', req.body);

    // Validate property_id format
    if (!ObjectId.isValid(property_id)) {
      return res.status(400).json({ 
        message: "Invalid property ID format",
        details: `Property ID must be a 24 character hex string. Received: ${property_id}`
      });
    }

    // Required Fields Check
    if (!email || !owneremail || !property_id || !from || !to) {
      return res.status(400).json({ 
        message: "Missing required fields",
        details: "email, owneremail, property_id, from, and to are required"
      });
    }

    // Check if property exists
    const property = await db.collection("all_products").findOne({
      _id: new ObjectId(property_id)
    });

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Check if dates are available
    const existingBooking = await db.collection("bookings").findOne({
      property_id,
      $or: [
        { from: { $lte: new Date(to), $gte: new Date(from) } },
        { to: { $gte: new Date(from), $lte: new Date(to) } }
      ]
    });

    if (existingBooking) {
      return res.status(400).json({ message: "Property not available for these dates" });
    }

    // Create booking
    const booking = {
      property_id,
      name,
      rent,
      from: new Date(from),
      to: new Date(to),
      description,
      mobile,
      email, // sender's email
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection("bookings").insertOne(booking);
     
    // Generate confirmation and rejection URLs
    const baseUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
    const confirmUrl = `${baseUrl}/booking/confirm/${result.insertedId}`;
    const rejectUrl = `${baseUrl}/booking/reject/${result.insertedId}`;

    // Send email to owner with action buttons
    await transporter.sendMail({
      from: `"Rental Management" <${process.env.SMTP_EMAIL}>`,
      to: owneremail,
      subject: "New Booking Request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Booking Request</h2>
          <p>Hello,</p>
          <p>A new booking request has been received from <strong>${name}</strong> (${email}).</p>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3>Booking Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Check-in:</strong> ${new Date(from).toLocaleDateString()}</li>
              <li><strong>Check-out:</strong> ${new Date(to).toLocaleDateString()}</li>
              <li><strong>Monthly Rent:</strong> ₹${rent}</li>
              <li><strong>Property:</strong> ${property.name}</li>
              <li><strong>Location:</strong> ${property.location}</li>
              <li><strong>Contact Number:</strong> ${mobile}</li>
            </ul>
          </div>

          <div style="margin: 30px 0; text-align: center;">
            <a href="${confirmUrl}" 
               style="background-color: #4CAF50; color: white; padding: 12px 25px; text-decoration: none; border-radius: 4px; margin-right: 10px; display: inline-block;">
              Accept Booking
            </a>
            <a href="${rejectUrl}" 
               style="background-color: #f44336; color: white; padding: 12px 25px; text-decoration: none; border-radius: 4px; display: inline-block;">
              Reject Booking
            </a>
          </div>

          <p style="color: #666; font-size: 14px;">
            Click the appropriate button above to accept or reject this booking request.
          </p>
          
          <p>Best regards,<br/>Rental Management Team</p>
        </div>
      `
    });

    res.status(201).json({
      message: "Booking request received successfully",
      bookingId: result.insertedId,
      status: 'pending'
    });

  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ 
      message: "Internal Server Error", 
      error: error.message 
    });
  }
};

// Add confirmation handler
const handleBookingResponse = async (req, res) => {
  try {
    const { bookingId, action } = req.body; // Get from request body instead of params

    console.log('Processing booking response:', { bookingId, action });

    if (!ObjectId.isValid(bookingId)) {
      return res.status(400).json({ message: "Invalid booking ID" });
    }

    if (!action || !['confirm', 'reject'].includes(action)) {
      return res.status(400).json({ message: "Invalid action. Must be 'confirm' or 'reject'" });
    }

    const db = getDB();
    
    // Get booking details - UNCOMMENTED AND FIXED
    const booking = await db.collection("bookings").findOne({
      _id: new ObjectId(bookingId)
    });

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Check if already processed
    if (booking.status !== 'pending') {
      return res.status(400).json({ 
        message: `Booking already ${booking.status}`,
        currentStatus: booking.status 
      });
    }

    // Get property details for the email - UNCOMMENTED AND FIXED
    const property = await db.collection("all_products").findOne({
      _id: new ObjectId(booking.property_id)
    });

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Update booking status based on action
    const status = action === 'confirm' ? 'confirmed' : 'rejected';
    console.log('Updating booking status to:', status);
    
    await db.collection("bookings").updateOne(
      { _id: new ObjectId(bookingId) },
      { 
        $set: { 
          status,
          updatedAt: new Date(),
          responseDate: new Date()
        }
      }
    );

    // Enhanced email content with more details
    const emailContent = status === 'confirmed' 
      ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50; text-align: center;">🎉 Booking Confirmed! 🎉</h2>
          
          <p>Dear ${booking.name},</p>
          <p>Great news! Your booking request for <strong>${property.name}</strong> has been accepted.</p>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Booking Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="margin: 10px 0;"><strong>Property:</strong> ${property.name}</li>
              <li style="margin: 10px 0;"><strong>Location:</strong> ${property.location}</li>
              <li style="margin: 10px 0;"><strong>Check-in:</strong> ${new Date(booking.from).toLocaleDateString()}</li>
              <li style="margin: 10px 0;"><strong>Check-out:</strong> ${new Date(booking.to).toLocaleDateString()}</li>
              <li style="margin: 10px 0;"><strong>Monthly Rent:</strong> ₹${booking.rent}</li>
            </ul>
          </div>

          <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #2e7d32; margin-top: 0;">Next Steps:</h4>
            <ol style="margin: 0; padding-left: 20px;">
              <li>The owner will contact you shortly to discuss key collection</li>
              <li>Keep your ID proof and security deposit ready</li>
              <li>Plan your move-in according to the check-in date</li>
            </ol>
          </div>

          <p style="color: #666;">
            For any queries, please contact the owner at: ${property.email || 'Contact via platform'}<br>
            Contact Number: ${property.mobile || booking.mobile || 'Contact via platform'}
          </p>

          <p style="text-align: center; color: #666; font-size: 14px;">
            Thank you for using Rental Management!<br>
            We wish you a pleasant stay.
          </p>
        </div>
      `
      : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f44336; text-align: center;">Booking Update</h2>
          
          <p>Dear ${booking.name},</p>
          <p>We regret to inform you that your booking request for <strong>${property.name}</strong> could not be accepted at this time.</p>
          
          <div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ff9800;">
            <h4 style="color: #e65100; margin-top: 0;">Booking Details:</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin: 5px 0;"><strong>Property:</strong> ${property.name}</li>
              <li style="margin: 5px 0;"><strong>Dates:</strong> ${new Date(booking.from).toLocaleDateString()} - ${new Date(booking.to).toLocaleDateString()}</li>
            </ul>
          </div>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Don't worry! You can:</strong></p>
            <ul>
              <li>Try booking for different dates</li>
              <li>Explore other similar properties</li>
              <li>Contact our support team for assistance</li>
            </ul>
          </div>

          <p style="text-align: center; color: #666; font-size: 14px;">
            Thank you for your understanding.<br>
            The Rental Management Team
          </p>
        </div>
      `;

    console.log('Sending email to:', booking.email);

    // Send immediate email notification
    const emailResult = await transporter.sendMail({
      from: `"Rental Management" <${process.env.SMTP_EMAIL}>`,
      to: booking.email,
      subject: status === 'confirmed' 
        ? "🎉 Booking Confirmed - Your New Home Awaits!" 
        : "Booking Request Update",
      html: emailContent
    });

    console.log('Email sent successfully:', emailResult.messageId);

    // Send response to frontend
    res.json({ 
      message: `Booking ${status} successfully and notification sent to customer`,
      status,
      emailSent: true,
      bookingDetails: {
        customerEmail: booking.email,
        propertyName: property.name,
        dates: `${new Date(booking.from).toLocaleDateString()} - ${new Date(booking.to).toLocaleDateString()}`
      }
    });

  } catch (error) {
    console.error("Error handling booking response:", error);
    res.status(500).json({ 
      message: "Internal Server Error", 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

module.exports = { generateform, handleBookingResponse };