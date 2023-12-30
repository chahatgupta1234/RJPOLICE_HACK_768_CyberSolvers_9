import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    // Fetch and display the list of submitted claims from the server
    const fetchClaims = async () => {
      try {
        const response = await fetch('http://localhost:3001/get-claims');
        const data = await response.json();
        setClaims(data);
      } catch (error) {
        console.error('Error fetching claims:', error);
      }
    };

    fetchClaims();
  }, []); // Run once on component mount

  return (
    <div className="mt-5">
      <h2 className="mb-4">Complaint Status Dashboard</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Complainant Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim.id}>
              <td>{claim.id}</td>
              <td>{claim.complainant_name}</td>
              <td>{claim.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
