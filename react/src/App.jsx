import React, { useState } from 'react';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [complainantName, setComplainantName] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const submitClaim = async () => {
    // ... (your existing code for submitting claims)

    // After submitting the claim, update the dashboard
    // You may need to add logic to refresh the dashboard in a real-world scenario
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">1930 Helpline Automated Recovery Platform</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">File a Claim</h2>
              {/* Form for filing claims */}
              {/* ... (your existing form code) */}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              {/* Display case status for complainants */}
              <h2 className="card-title mb-4">Case Status</h2>
              <p>{statusMessage}</p>
            </div>
          </div>
        </div>
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
