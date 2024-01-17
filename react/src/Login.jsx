// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [complaintId, setComplaintId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, let's just log the values for now
    console.log('Complaint ID:', complaintId);
    console.log('Mobile Number:', mobileNumber);
    console.log('OTP:', otp);
  };

  const handleSendOtp = async () => {
    try {
      // Simulate sending a request to the backend to send OTP using Axios
      const response = await axios.post('/api/send-otp', {
        mobileNumber,
      });

      // Check if the request was successful
      if (response.status === 200) {
        setIsOtpSent(true);
        console.log('OTP sent successfully!');
      } else {
        // Handle errors or log a message if the OTP sending fails
        console.error('Failed to send OTP:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error sending OTP:', error.message);
    }
  };

  const handleResendOtp = () => {
    // Add logic to resend OTP to the provided mobile number
    // For simplicity, let's just log a message for now
    console.log('Resending OTP to', mobileNumber);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <div className="mb-4">
          <label htmlFor="complaintId" className="block text-sm font-medium text-gray-600">
            Complaint ID
          </label>
          <input
            type="text"
            id="complaintId"
            name="complaintId"
            value={complaintId}
            onChange={(e) => setComplaintId(e.target.value)}
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
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {isOtpSent ? (
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-600">
              OTP
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        ) : null}

        <div className="flex items-center justify-between">
          {!isOtpSent ? (
            <button
              type="button"
              onClick={handleSendOtp}
              className="text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded-md"
            >
              Send OTP
            </button>
          ) : (
            <div className="flex items-center">
              <button
                type="button"
                onClick={handleResendOtp}
                className="text-gray-600 bg-white border-0 py-2 px-4 focus:outline-none hover:underline"
              >
                Resend OTP
              </button>
              <button
                type="button"
                onClick={handleLogin}
                className="ml-4 text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded-md"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
