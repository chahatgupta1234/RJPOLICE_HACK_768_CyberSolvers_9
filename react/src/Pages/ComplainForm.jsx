// Form.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    aadharNumber: '',
    address: '',
    pincode: '',
    city: '',
    contact: '',
    complaintText: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    <div className="h-full w-full p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Complaint Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
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

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="aadharNumber" className="block text-sm font-medium text-gray-600">
              Aadhar Number
            </label>
            <input
              type="text"
              id="aadharNumber"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="pincode" className="block text-sm font-medium text-gray-600">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-600">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </div>

        <div className="mb-4">
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

        <button
          type="submit"
          className="text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded-md"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default Form;
