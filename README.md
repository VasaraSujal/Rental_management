# 🏠 Rental Management System

A **full-stack web application** to streamline the entire rental process.  
It allows customers to browse and rent products, manage bookings, make secure payments, and receive real-time email notifications.  
Admins can manage listings, track reservations, and communicate with customers easily.

---

## ✨ Features

### 🔹 Customer Side
- Browse and search available rental products.
- Reserve items for specific dates and time frames.
- Multiple rental durations: hourly, daily, weekly, monthly, or yearly.
- View product details with pricing, images, and availability.
- Add to cart and checkout securely with **Stripe Payment Gateway**.
- Receive booking confirmation and updates via **email notifications**.

### 🔹 Admin Side
- Add, edit, and delete products.
- Set different pricing for different rental durations.
- Manage customer reservations and track inventory.
- Receive booking requests and updates via **Nodemailer**.
- Dashboard for tracking revenue and customer activity.

### 🔹 Core Functionalities
- **Stripe Integration** – Secure online payment processing.
- **Nodemailer Integration** – Email notifications between admin and customers.
- Real-time product availability tracking.
- Role-based authentication (Admin & Customer).
- Responsive and modern UI for desktop & mobile.

---

## 🛠️ Tech Stack

**Frontend:**
- React.js  
- Tailwind CSS  
- Axios (API calls)  
- React Router

**Backend:**
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- Stripe API (Payments)  
- Nodemailer (Email notifications)  

**Other Tools:**
- JWT Authentication  
- bcrypt.js (Password hashing)  
- Dotenv (Environment variables)  

---

## 📦 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/JatinRajvani/Rental_management.git
cd Rental_management
