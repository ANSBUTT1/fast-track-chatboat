import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';  // Importing a more professional check circle icon from Font Awesome
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
const PricingModule = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-16 py-8">
    <h1 className="text-4xl font-bold text-center text-primary mb-12">FasTrak Pricing</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {/* Basic Plan */}
      <div className="bg-secondary border border-primary/20 shadow-xl rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Basic Plan</h2>
        <p className="text-3xl font-bold text-primary/90 mb-4">$9.99/month</p>
        <ul className="  flex flex-col items-start  text-gray-600 space-y-4 mb-6">
          <li className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-4 text-2xl hover:text-green-600 transition-colors" /> Access to core features
          </li>
          <li className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-4 text-2xl hover:text-green-600 transition-colors" /> 10 GB Storage
          </li>
          <li className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-4 text-2xl hover:text-green-600 transition-colors" /> Email Support
          </li>
          <li className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-4 text-2xl hover:text-green-600 transition-colors" /> Customizable Dashboard
          </li>
          <li className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-4 text-2xl hover:text-green-600 transition-colors" /> Monthly Reports
          </li>
        </ul>
        <button className="bg-primary text-secondary px-10 py-2 rounded-lg hover:bg-secondary hover:text-primary border border-primary">Get Started</button>
      </div>

      {/* Premium Plan */}
      <div className="bg-white shadow-xl border border-primary/20 rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Premium Plan</h2>
        <p className="text-3xl font-bold text-primary/90 mb-4">$19.99/month</p>
        <ul className="flex flex-col items-start text-gray-600 space-y-4 mb-6">
          <li className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-4 text-2xl hover:text-green-600 transition-colors" /> Access to all features
          </li>
          <li className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-4 text-2xl hover:text-green-600 transition-colors" /> 50 GB Storage
          </li>
          <li className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-4 text-2xl hover:text-green-600 transition-colors" /> Priority Support
          </li>
          <li className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-4 text-2xl hover:text-green-600 transition-colors" /> Customizable Dashboard
          </li>
          <li className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-4 text-2xl hover:text-green-600 transition-colors" /> Weekly Reports
          </li>
        </ul>
        <button className="bg-primary text-secondary px-10 py-2 rounded-lg hover:bg-secondary hover:text-primary border border-primary">Get Started</button>
      </div>

      {/* Enterprise Plan */}
      <div className="bg-white shadow-xl border border-primary/20 rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enterprise Plan</h2>
        <p className="text-3xl font-bold text-primary/90 mb-4">Contact Us for Pricing</p>
        <ul className="flex flex-col items-start text-gray-600 space-y-4 mb-6">
          <li className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-4 text-2xl hover:text-green-600 transition-colors" /> Unlimited Features
          </li>
          <li className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-4 text-2xl hover:text-green-600 transition-colors" /> Unlimited Storage
          </li>
          <li className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-4 text-2xl hover:text-green-600 transition-colors" /> 24/7 Dedicated Support
          </li>
          <li className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-4 text-2xl hover:text-green-600 transition-colors" /> Customizable Dashboard
          </li>
          <li className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-4 text-2xl hover:text-green-600 transition-colors" /> VIP Support
          </li>
        </ul>
        <button className="bg-primary text-secondary px-10 py-2 rounded-lg hover:bg-secondary hover:text-primary border border-primary">Contact Us</button>
      </div>
    </div>
     <div className="flex justify-end mt-6">
            <Link to="/">
              <button className="bg-primary text-secondary px-4 text-xs py-2 rounded-lg hover:bg-secondary hover:text-primary border border-primary ">
                back
              </button>
            </Link>
          </div>
  </div>
  )
}

export default PricingModule
