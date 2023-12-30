import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  const [complaintNo, setComplaintNo] = useState('');
  // const [statusMessage, setStatusMessage] = useState('');

  function submitClaim(ev){
    // ... (your existing code for submitting claims)
    ev.preventDefault();
    console.log("submit");
    window.location.href = '/dash';
    // After submitting the claim, update the dashboard
    // You may need to add logic to refresh the dashboard in a real-world scenario
  }

  return (
    <div className="container mt-5">

      <h1>1930 Helpline Automated Recovery Platform</h1>
      <div id="fileClaimForm">
        <label htmlFor="complaintNo">Complainant Number:</label>
        <input type="number" id="complaintNo" onChange={ev => setComplaintNo(ev.target.value)} value={complaintNo}/>
        <button onClick={submitClaim}>Submit Claim</button>
      </div>
      {/* <div id="caseStatus">
        <h2>Case Status</h2>
        <p id="statusMessage"></p>
      </div> */}
    </div>
  );
}

export default Login;
