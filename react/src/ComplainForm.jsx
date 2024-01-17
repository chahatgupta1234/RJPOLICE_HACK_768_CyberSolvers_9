// Form.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Complaint Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
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
