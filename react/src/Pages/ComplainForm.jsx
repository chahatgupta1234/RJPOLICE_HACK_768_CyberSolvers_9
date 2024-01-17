// Form.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    fraudType: '',
    firstName: '',
    lastName: '',
    email: '',
    aadharNumber: '',
    address: '',
    pincode: '',
    city: '',
    contact: '',
    complaintText: '',
    // Fields for hacking
    complaintId: '',
    mobileNumber: '',
    otp: '',
    // Fields for social
    // ... (Add social fraud fields)
    // Fields for financial
    // ... (Add financial fraud fields)
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFraudTypeChange = (selectedFraudType) => {
    setFormData({
      ...formData,
      fraudType: selectedFraudType,
      // Reset all fields when fraud type changes
      firstName: '',
      lastName: '',
      email: '',
      aadharNumber: '',
      address: '',
      pincode: '',
      city: '',
      contact: '',
      complaintText: '',
      complaintId: '',
      mobileNumber: '',
      otp: '',
      // ... (Reset other fraud-specific fields)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate sending a request to the backend to save the complaint data using Axios
      const response = await axios.post('/api/save-complaint', formData);

      // Check if the request was successful
      if (response.status === 200) {
        console.log('Complaint data submitted successfully!');
      } else {
        // Handle errors or log a message if the submission fails
        console.error('Failed to submit complaint data:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error submitting complaint data:', error.message);
    }
  };

  return (
    <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Complaint Form</h2>

      <div className="mb-4">
        <label htmlFor="fraudType" className="block text-sm font-medium text-gray-600">
          Type of Fraud
        </label>
        <select
          id="fraudType"
          name="fraudType"
          value={formData.fraudType}
          onChange={(e) => handleFraudTypeChange(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        >
          <option value="">Select Fraud Type</option>
          <option value="hacking">Hacking</option>
          <option value="social">Social</option>
          <option value="financial">Financial</option>
          <option value="other">Other</option>
        </select>
      </div>

      {formData.fraudType === 'hacking' && (
        <>
          {/* Fields for Hacking Fraud */}
          <div className="mb-4">
            <label htmlFor="complaintId" className="block text-sm font-medium text-gray-600">
              Complaint ID
            </label>
            <input
              type="text"
              id="complaintId"
              name="complaintId"
              value={formData.complaintId}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-600">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-600">
              OTP
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </>
      )}

      {formData.fraudType === 'social' && (
        <>
          {/* Fields for Social Fraud */}
          {/* ... (Add social fraud fields) */}
        </>
      )}

      {formData.fraudType === 'financial' && (
        <>
          {/* Fields for Financial Fraud */}
          {/* ... (Add financial fraud fields) */}
        </>
      )}

      {/* Common Fields */}
      <div className="grid grid-cols-2 gap-4">
        {/* Common Personal Information Fields */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* ... (Add other common fields) */}

        {/* Complaint Text Field */}
        <div className="col-span-2 mb-4">
          <label htmlFor="complaintText" className="block text-sm font-medium text-gray-600">
            Complaint Text
          </label>
          <textarea
            id="complaintText"
            name="complaintText"
            value={formData.complaintText}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded-md"
      >
        Submit Complaint
      </button>
    </div>
  );
};

export default Form;
