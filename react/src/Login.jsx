// Import other dependencies and styles
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  const [complaintNo, setComplaintNo] = useState('');

  function submitClaim(ev) {
    ev.preventDefault();
    console.log("submit");
    window.location.href = '/Dashboard/';
  }
  
  return (

<div className=' w-full h-screen items-center justify-center'>
  <div className=" w-full h-screen item-center justify-center p-8 rounded shadow-lg flex flex-col border-8 border-sky-500">
    <div><h1 className="text-4xl font-bold mb-4 text-center">Fraud Detection by Rajasthan Police</h1></div>
    <div><h2 className="text-2xl mb-4 py-11 text-center">The AI Solution you need to protect from any fraud.</h2></div>
    <div className='flex justify-center'>
    <button className="bg-white hover:bg-red-700 text-black font-bold border rounded focus:outline-none focus:shadow-outline">
      <p className="px-3">  Open</p>
    </button>
    </div>
    <div>
    <section className="text-center mt-8">
      <h3 className="text-lg font-semibold mb-2">Hello everyone! Here is a broad Solution for any type of Mislead or Fraud</h3>
      <p>Presented by Rajasthan Police on 1930 Helpline</p>
    </section>
    </div>
  </div>
</div>
 );
}

export default Login;
