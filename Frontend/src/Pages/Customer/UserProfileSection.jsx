// import React, { useState } from 'react';
// import { 
//   User, Shield, Calendar, Bell, Settings, Edit, Camera,  Save, Eye, EyeOff, Mail, Phone, MapPin, Lock, Key, Smartphone, Home, Clock, DollarSign, CheckCircle, XCircle, AlertCircle} from 'lucide-react';

// const UserProfileSection = () => {
//   const [activeSection, setActiveSection] = useState('personal-info');
//   const [isEditing, setIsEditing] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   // Mock user data
//   const [userData, setUserData] = useState({
//     name: "John Anderson",
//     email: "john.anderson@email.com",
//     phone: "+1 (555) 123-4567",
//     address: "123 Main Street, New York, NY 10001",
//     dateOfBirth: "1990-05-15",
//     profileImage: "/api/placeholder/150/150",
//     joinDate: "January 2023"
//   });

//   const [securityData, setSecurityData] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//     twoFactorEnabled: true,
//     lastLogin: "2025-08-11 09:30 AM"
//   });

//   const [notificationSettings, setNotificationSettings] = useState({
//     emailNotifications: true,
//     smsNotifications: false,
//     pushNotifications: true,
//     rentReminders: true,
//     paymentAlerts: true,
//     maintenanceUpdates: true
//   });

//   const rentalHistory = [
//     {
//       id: 1,
//       property: "Apartment 2A - Downtown",
//       startDate: "2023-01-15",
//       endDate: "2023-12-31",
//       monthlyRent: 1200,
//       status: "active",
//       landlord: "Metro Properties"
//     },
//     {
//       id: 2,
//       property: "Studio 5B - Midtown",
//       startDate: "2022-06-01",
//       endDate: "2022-12-31",
//       monthlyRent: 900,
//       status: "completed",
//       landlord: "City Rentals"
//     },
//     {
//       id: 3,
//       property: "House 12C - Suburbs",
//       startDate: "2021-03-01",
//       endDate: "2022-05-31",
//       monthlyRent: 2500,
//       status: "completed",
//       landlord: "Family Homes LLC"
//     }
//   ];

//   const menuItems = [
//     {
//       id: 'personal-info',
//       label: 'Personal Info',
//       icon: User,
//       color: 'text-blue-600'
//     },
//     {
//       id: 'security',
//       label: 'Security',
//       icon: Shield,
//       color: 'text-green-600'
//     },
//     {
//       id: 'my-rentals',
//       label: 'My Rentals',
//       icon: Calendar,
//       color: 'text-purple-600'
//     },
//     {
//       id: 'notifications',
//       label: 'Notifications',
//       icon: Bell,
//       color: 'text-orange-600'
//     },
//     {
//       id: 'admin-dashboard',
//       label: 'Admin Dashboard',
//       icon: Settings,
//       color: 'text-gray-600'
//     }
//   ];

//   const handleSave = () => {
//     setIsEditing(false);
//     // Save logic here
//   };

//   const renderPersonalInfo = () => (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
//         <button
//           onClick={() => setIsEditing(!isEditing)}
//           className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           <Edit className="h-4 w-4" />
//           <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
//         </button>
//       </div>

//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         {/* Profile Image */}
//         <div className="flex items-center space-x-6 mb-8">
//           <div className="relative">
//             <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
//               <User className="h-16 w-16 text-white" />
//             </div>
//             {isEditing && (
//               <button className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700">
//                 <Camera className="h-5 w-5" />
//               </button>
//             )}
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800">{userData.name}</h3>
//             <p className="text-gray-600">Member since {userData.joinDate}</p>
//             <div className="flex items-center mt-2">
//               <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
//               <span className="text-sm text-green-600">Verified Account</span>
//             </div>
//           </div>
//         </div>

//         {/* Form Fields */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//             <input
//               type="text"
//               value={userData.name}
//               onChange={(e) => setUserData({...userData, name: e.target.value})}
//               disabled={!isEditing}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//             <div className="relative">
//               <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-4" />
//               <input
//                 type="email"
//                 value={userData.email}
//                 onChange={(e) => setUserData({...userData, email: e.target.value})}
//                 disabled={!isEditing}
//                 className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//             <div className="relative">
//               <Phone className="h-5 w-5 text-gray-400 absolute left-3 top-4" />
//               <input
//                 type="tel"
//                 value={userData.phone}
//                 onChange={(e) => setUserData({...userData, phone: e.target.value})}
//                 disabled={!isEditing}
//                 className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
//             <input
//               type="date"
//               value={userData.dateOfBirth}
//               onChange={(e) => setUserData({...userData, dateOfBirth: e.target.value})}
//               disabled={!isEditing}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
//             />
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
//             <div className="relative">
//               <MapPin className="h-5 w-5 text-gray-400 absolute left-3 top-4" />
//               <input
//                 type="text"
//                 value={userData.address}
//                 onChange={(e) => setUserData({...userData, address: e.target.value})}
//                 disabled={!isEditing}
//                 className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
//               />
//             </div>
//           </div>
//         </div>

//         {isEditing && (
//           <div className="flex justify-end mt-6">
//             <button
//               onClick={handleSave}
//               className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
//             >
//               <Save className="h-4 w-4" />
//               <span>Save Changes</span>
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   const renderSecurity = () => (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-gray-800">Security Settings</h2>

//       {/* Password Change */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Change Password</h3>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
//             <div className="relative">
//               <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-4" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={securityData.currentPassword}
//                 onChange={(e) => setSecurityData({...securityData, currentPassword: e.target.value})}
//                 className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-4 text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
//               <input
//                 type="password"
//                 value={securityData.newPassword}
//                 onChange={(e) => setSecurityData({...securityData, newPassword: e.target.value})}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
//               <input
//                 type="password"
//                 value={securityData.confirmPassword}
//                 onChange={(e) => setSecurityData({...securityData, confirmPassword: e.target.value})}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//           </div>

//           <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//             Update Password
//           </button>
//         </div>
//       </div>

//       {/* Two-Factor Authentication */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800">Two-Factor Authentication</h3>
//             <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="2fa"
//               checked={securityData.twoFactorEnabled}
//               onChange={(e) => setSecurityData({...securityData, twoFactorEnabled: e.target.checked})}
//               className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
//             />
//             <label htmlFor="2fa" className="ml-3 text-sm text-gray-700">
//               {securityData.twoFactorEnabled ? 'Enabled' : 'Disabled'}
//             </label>
//           </div>
//         </div>

//         <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
//           <Smartphone className="h-5 w-5 text-green-600" />
//           <div>
//             <p className="text-sm font-medium text-green-800">SMS Authentication</p>
//             <p className="text-xs text-green-600">Receive codes via SMS to {userData.phone}</p>
//           </div>
//         </div>
//       </div>

//       {/* Login Activity */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Login Activity</h3>
//         <div className="space-y-3">
//           <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//             <div className="flex items-center space-x-3">
//               <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//               <span className="text-sm text-gray-700">Current Session</span>
//             </div>
//             <span className="text-sm text-gray-500">New York, NY • {securityData.lastLogin}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderMyRentals = () => (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-gray-800">My Rentals</h2>

//       {/* Current Rental */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Rental</h3>
//         {rentalHistory.filter(rental => rental.status === 'active').map(rental => (
//           <div key={rental.id} className="border border-green-200 bg-green-50 rounded-lg p-4">
//             <div className="flex items-start justify-between">
//               <div className="flex items-start space-x-4">
//                 <Home className="h-8 w-8 text-green-600 mt-1" />
//                 <div>
//                   <h4 className="font-semibold text-gray-800">{rental.property}</h4>
//                   <p className="text-sm text-gray-600">Landlord: {rental.landlord}</p>
//                   <div className="flex items-center space-x-4 mt-2">
//                     <span className="text-sm text-gray-600">
//                       <Clock className="h-4 w-4 inline mr-1" />
//                       {rental.startDate} - {rental.endDate}
//                     </span>
//                     <span className="text-sm font-medium text-green-600">
//                       <DollarSign className="h-4 w-4 inline mr-1" />
//                       ${rental.monthlyRent}/month
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                 <CheckCircle className="h-3 w-3 mr-1" />
//                 Active
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Rental History */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Rental History</h3>
//         <div className="space-y-4">
//           {rentalHistory.filter(rental => rental.status === 'completed').map(rental => (
//             <div key={rental.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
//               <div className="flex items-start justify-between">
//                 <div className="flex items-start space-x-4">
//                   <Home className="h-6 w-6 text-gray-500 mt-1" />
//                   <div>
//                     <h4 className="font-medium text-gray-800">{rental.property}</h4>
//                     <p className="text-sm text-gray-600">Landlord: {rental.landlord}</p>
//                     <div className="flex items-center space-x-4 mt-2">
//                       <span className="text-sm text-gray-500">
//                         <Clock className="h-4 w-4 inline mr-1" />
//                         {rental.startDate} - {rental.endDate}
//                       </span>
//                       <span className="text-sm text-gray-500">
//                         <DollarSign className="h-4 w-4 inline mr-1" />
//                         ${rental.monthlyRent}/month
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
//                   Completed
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const renderNotifications = () => (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-gray-800">Notification Settings</h2>

//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-6">Communication Preferences</h3>

//         <div className="space-y-6">
//           <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//             <div className="flex items-center space-x-3">
//               <Mail className="h-5 w-5 text-blue-600" />
//               <div>
//                 <h4 className="font-medium text-gray-800">Email Notifications</h4>
//                 <p className="text-sm text-gray-600">Receive updates via email</p>
//               </div>
//             </div>
//             <input
//               type="checkbox"
//               checked={notificationSettings.emailNotifications}
//               onChange={(e) => setNotificationSettings({...notificationSettings, emailNotifications: e.target.checked})}
//               className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//             <div className="flex items-center space-x-3">
//               <Smartphone className="h-5 w-5 text-green-600" />
//               <div>
//                 <h4 className="font-medium text-gray-800">SMS Notifications</h4>
//                 <p className="text-sm text-gray-600">Receive important alerts via SMS</p>
//               </div>
//             </div>
//             <input
//               type="checkbox"
//               checked={notificationSettings.smsNotifications}
//               onChange={(e) => setNotificationSettings({...notificationSettings, smsNotifications: e.target.checked})}
//               className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//             <div className="flex items-center space-x-3">
//               <Bell className="h-5 w-5 text-orange-600" />
//               <div>
//                 <h4 className="font-medium text-gray-800">Push Notifications</h4>
//                 <p className="text-sm text-gray-600">Browser and mobile app notifications</p>
//               </div>
//             </div>
//             <input
//               type="checkbox"
//               checked={notificationSettings.pushNotifications}
//               onChange={(e) => setNotificationSettings({...notificationSettings, pushNotifications: e.target.checked})}
//               className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-6">Rental Alerts</h3>

//         <div className="space-y-4">
//           <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
//             <div className="flex items-center space-x-3">
//               <Calendar className="h-5 w-5 text-blue-600" />
//               <div>
//                 <h4 className="font-medium text-gray-800">Rent Reminders</h4>
//                 <p className="text-sm text-gray-600">Get reminded about upcoming rent payments</p>
//               </div>
//             </div>
//             <input
//               type="checkbox"
//               checked={notificationSettings.rentReminders}
//               onChange={(e) => setNotificationSettings({...notificationSettings, rentReminders: e.target.checked})}
//               className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
//             <div className="flex items-center space-x-3">
//               <DollarSign className="h-5 w-5 text-green-600" />
//               <div>
//                 <h4 className="font-medium text-gray-800">Payment Alerts</h4>
//                 <p className="text-sm text-gray-600">Notifications for successful payments and receipts</p>
//               </div>
//             </div>
//             <input
//               type="checkbox"
//               checked={notificationSettings.paymentAlerts}
//               onChange={(e) => setNotificationSettings({...notificationSettings, paymentAlerts: e.target.checked})}
//               className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
//             <div className="flex items-center space-x-3">
//               <AlertCircle className="h-5 w-5 text-yellow-600" />
//               <div>
//                 <h4 className="font-medium text-gray-800">Maintenance Updates</h4>
//                 <p className="text-sm text-gray-600">Updates on maintenance requests and property issues</p>
//               </div>
//             </div>
//             <input
//               type="checkbox"
//               checked={notificationSettings.maintenanceUpdates}
//               onChange={(e) => setNotificationSettings({...notificationSettings, maintenanceUpdates: e.target.checked})}
//               className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderAdminDashboard = () => (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>

//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <div className="text-center py-8">
//           <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">Admin Access Required</h3>
//           <p className="text-gray-600 mb-6">
//             This section is only available for users with administrative privileges.
//           </p>
//           <div className="space-y-4">
//             <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
//               <XCircle className="h-4 w-4 text-red-500" />
//               <span>Current user role: Standard User</span>
//             </div>
//             <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//               Request Admin Access
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderContent = () => {
//     switch (activeSection) {
//       case 'personal-info':
//         return renderPersonalInfo();
//       case 'security':
//         return renderSecurity();
//       case 'my-rentals':
//         return renderMyRentals();
//       case 'notifications':
//         return renderNotifications();
//       case 'admin-dashboard':
//         return renderAdminDashboard();
//       default:
//         return renderPersonalInfo();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//           {/* Left Menu */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-6">
//               <div className="space-y-2">
//                 {menuItems.map((item) => {
//                   const IconComponent = item.icon;
//                   return (
//                     <button
//                       key={item.id}
//                       onClick={() => setActiveSection(item.id)}
//                       className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
//                         activeSection === item.id
//                           ? 'bg-blue-50 text-blue-700 border border-blue-200'
//                           : 'text-gray-700 hover:bg-gray-50'
//                       }`}
//                     >
//                       <IconComponent className="h-5 w-5 ${activeSection === item.id ? 'text-blue-600' : item.color}" />
//                       <span className="font-medium">{item.label}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {renderContent()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfileSection;




import React, { useState, useEffect } from 'react';
import {
  User, Shield, Calendar, Bell, Settings, Edit, Camera, Save, Eye, EyeOff,
  Mail, Phone, MapPin, Lock, Smartphone, Home, Clock, DollarSign, CheckCircle,
  XCircle, AlertCircle
} from 'lucide-react';
import { useSelector } from 'react-redux';

const UserProfileSection = () => {
  const { user } = useSelector((state) => state.auth); // from Redux auth slice
  const email = user?.email;

  const [activeSection, setActiveSection] = useState('personal-info');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    mobile: "",
    location: "",
    profilePhoto: "",
    createdAt: "",
    role: ""
  });

  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorEnabled: false,
    lastLogin: ""
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    rentReminders: true,
    paymentAlerts: true,
    maintenanceUpdates: true
  });
  const handleChangePassword = async () => {
    if (securityData.newPassword !== securityData.confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5500/api/change-password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userData.email,
          currentPassword: securityData.currentPassword,
          newPassword: securityData.newPassword
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert("Password updated successfully!");
      setSecurityData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (error) {
      alert(error.message);
    }
  };

  // Fetch user profile from backend
  useEffect(() => {
    if (!email) return;

    const fetchProfile = async () => {
      try {
        const res = await fetch(`http://localhost:5500/api/profile/${email}`);
        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();

        setUserData({
          username: data.username || "",
          email: data.email || "",
          mobile: data.mobile || "",
          location: data.location || "",
          profilePhoto: data.profilePhoto || "",
          createdAt: data.createdAt ? new Date(data.createdAt).toLocaleDateString() : "",
          role: data.role || "customer"
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [email]);

  const handleSave = async () => {
    setIsEditing(false);
    try {
      const res = await fetch(`http://localhost:5500/api/update/${email}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      });
      if (!res.ok) throw new Error("Update failed");
      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Error updating profile");
    }
  };

  const menuItems = [
    { id: 'personal-info', label: 'Personal Info', icon: User, color: 'text-blue-600' },
    { id: 'security', label: 'Security', icon: Shield, color: 'text-green-600' },
    { id: 'rental', label: 'Rental', icon: Calendar, color: 'text-black-600' },
    { id: 'notifications', label: 'Notifications', icon: Bell, color: 'text-orange-600' },
    { id: 'admin-dashboard', label: 'Admin Dashboard', icon: Settings, color: 'text-gray-600' }
  ];

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Edit className="h-4 w-4" />
          <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        {/* Profile Image */}
        <div className="flex items-center space-x-6 mb-8">
          <div className="relative">
            {userData.profilePhoto ? (
              <img src={userData.profilePhoto} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
            ) : (
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="h-16 w-16 text-white" />
              </div>
            )}
            {isEditing && (
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700">
                <Camera className="h-5 w-5" />
              </button>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{userData.username}</h3>
            <p className="text-gray-600">Member since {userData.createdAt}</p>
            <div className="flex items-center mt-2">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">Verified Account</span>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={userData.username}
              onChange={(e) => setUserData({ ...userData, username: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-4" />
              <input
                type="email"
                value={userData.email}
                disabled
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <div className="relative">
              <Phone className="h-5 w-5 text-gray-400 absolute left-3 top-4" />
              <input
                type="tel"
                value={userData.mobile}
                onChange={(e) => setUserData({ ...userData, mobile: e.target.value })}
                disabled={!isEditing}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-50"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <div className="relative">
              <MapPin className="h-5 w-5 text-gray-400 absolute left-3 top-4" />
              <input
                type="text"
                value={userData.location}
                onChange={(e) => setUserData({ ...userData, location: e.target.value })}
                disabled={!isEditing}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-50"
              />
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Save className="h-4 w-4" />
              <span>Save Changes</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Security Settings</h2>

      {/* Password Change */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Change Password</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <div className="relative">
              <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-4" />
              <input
                type={showPassword ? "text" : "password"}
                value={securityData.currentPassword}
                onChange={(e) => setSecurityData({ ...securityData, currentPassword: e.target.value })}
                className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                value={securityData.newPassword}
                onChange={(e) => setSecurityData({ ...securityData, newPassword: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
              <input
                type="password"
                value={securityData.confirmPassword}
                onChange={(e) => setSecurityData({ ...securityData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <button
            onClick={handleChangePassword}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Update Password
          </button>

        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="2fa"
              checked={securityData.twoFactorEnabled}
              onChange={(e) => setSecurityData({ ...securityData, twoFactorEnabled: e.target.checked })}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <label htmlFor="2fa" className="ml-3 text-sm text-gray-700">
              {securityData.twoFactorEnabled ? 'Enabled' : 'Disabled'}
            </label>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
          <Smartphone className="h-5 w-5 text-green-600" />
          <div>
            <p className="text-sm font-medium text-green-800">SMS Authentication</p>
            <p className="text-xs text-green-600">Receive codes via SMS to {userData.mobile}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMyRentals = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">My Rentals</h2>

      {/* Current Rental */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Rental</h3>
        {rentalHistory
          .filter(rental => rental.status === 'active')
          .map(rental => (
            <div
              key={rental.id}
              className="border border-green-200 bg-green-50 rounded-lg p-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Home className="h-8 w-8 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {rental.property}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Landlord: {rental.landlord}
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-gray-600">
                        <Clock className="h-4 w-4 inline mr-1" />
                        {rental.startDate} - {rental.endDate}
                      </span>
                      <span className="text-sm font-medium text-green-600">
                        <DollarSign className="h-4 w-4 inline mr-1" />
                        ${rental.monthlyRent}/month
                      </span>
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Active
                </span>
              </div>
            </div>
          ))}
      </div>

      {/* Rental History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Rental History</h3>
        <div className="space-y-4">
          {rentalHistory
            .filter(rental => rental.status === 'completed')
            .map(rental => (
              <div
                key={rental.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <Home className="h-6 w-6 text-gray-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {rental.property}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Landlord: {rental.landlord}
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm text-gray-500">
                          <Clock className="h-4 w-4 inline mr-1" />
                          {rental.startDate} - {rental.endDate}
                        </span>
                        <span className="text-sm text-gray-500">
                          <DollarSign className="h-4 w-4 inline mr-1" />
                          ${rental.monthlyRent}/month
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Completed
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );


  const renderNotifications = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Notification Settings</h2>

      {/* Communication Preferences */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Communication Preferences</h3>
        <div className="space-y-6">

          {/* Email Notifications */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <div>
                <h4 className="font-medium text-gray-800">Email Notifications</h4>
                <p className="text-sm text-gray-600">Receive updates via email</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={notificationSettings.emailNotifications}
              onChange={(e) =>
                setNotificationSettings({
                  ...notificationSettings,
                  emailNotifications: e.target.checked
                })
              }
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
          </div>

          {/* SMS Notifications */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <Smartphone className="h-5 w-5 text-green-600" />
              <div>
                <h4 className="font-medium text-gray-800">SMS Notifications</h4>
                <p className="text-sm text-gray-600">Receive important alerts via SMS</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={notificationSettings.smsNotifications}
              onChange={(e) =>
                setNotificationSettings({
                  ...notificationSettings,
                  smsNotifications: e.target.checked
                })
              }
              className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
            />
          </div>

          {/* Push Notifications */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <Bell className="h-5 w-5 text-orange-600" />
              <div>
                <h4 className="font-medium text-gray-800">Push Notifications</h4>
                <p className="text-sm text-gray-600">Browser and mobile app notifications</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={notificationSettings.pushNotifications}
              onChange={(e) =>
                setNotificationSettings({
                  ...notificationSettings,
                  pushNotifications: e.target.checked
                })
              }
              className="w-5 h-5 text-orange-600 rounded focus:ring-orange-500"
            />
          </div>

        </div>
      </div>

      {/* Rental Alerts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Rental Alerts</h3>
        <div className="space-y-4">

          {/* Rent Reminders */}
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-blue-600" />
              <div>
                <h4 className="font-medium text-gray-800">Rent Reminders</h4>
                <p className="text-sm text-gray-600">Get reminded about upcoming rent payments</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={notificationSettings.rentReminders}
              onChange={(e) =>
                setNotificationSettings({
                  ...notificationSettings,
                  rentReminders: e.target.checked
                })
              }
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
          </div>

          {/* Payment Alerts */}
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <DollarSign className="h-5 w-5 text-green-600" />
              <div>
                <h4 className="font-medium text-gray-800">Payment Alerts</h4>
                <p className="text-sm text-gray-600">Notifications for successful payments and receipts</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={notificationSettings.paymentAlerts}
              onChange={(e) =>
                setNotificationSettings({
                  ...notificationSettings,
                  paymentAlerts: e.target.checked
                })
              }
              className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
            />
          </div>

          {/* Maintenance Updates */}
          <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <div>
                <h4 className="font-medium text-gray-800">Maintenance Updates</h4>
                <p className="text-sm text-gray-600">Updates on maintenance requests and property issues</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={notificationSettings.maintenanceUpdates}
              onChange={(e) =>
                setNotificationSettings({
                  ...notificationSettings,
                  maintenanceUpdates: e.target.checked
                })
              }
              className="w-5 h-5 text-yellow-600 rounded focus:ring-yellow-500"
            />
          </div>

        </div>
      </div>
    </div>
  );


  const renderAdminDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
        {userData.role === "admin" ? (
          <p className="text-green-600 font-semibold">Welcome Admin</p>
        ) : (
          <>
            <XCircle className="h-6 w-6 text-red-500 mx-auto" />
            <p className="text-gray-600">Current Role: {userData.role}</p>
          </>
        )}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'personal-info':
        return renderPersonalInfo();
      case 'security':
        return renderSecurity();
      case 'rental':
        return renderMyRentals();
      case 'notifications':
        return renderNotifications();
      case 'admin-dashboard':
        return renderAdminDashboard();
      default:
        return renderPersonalInfo();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${activeSection === item.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
        <div className="lg:col-span-3">{renderContent()}</div>
      </div>
    </div>
  );
};

export default UserProfileSection;
