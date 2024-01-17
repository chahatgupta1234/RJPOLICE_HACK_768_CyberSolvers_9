import { Link } from 'react-router-dom';
import rcover_page from "../assets/rcover_page.jpg";

function Dashboard() {


  return ( 
    <div>
    <nav className="navbar">
      <ul>
       
      </ul>
      <div className="right-links">
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
          
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/chatbot">Chatbot</Link>
          </li>
        </ul>
      </div>
    </nav>

    <div className="image-container">
      <img className='w-[2000px] mx-auto' src={rcover_page} alt='/' />
    </div>

    <div className="ask-to-query">
<p style={{ color: 'brown', fontWeight: 'bold', fontSize: '50px', textAlign: 'center' }}>
Ask Any Query
</p>


<button
style={{
textAlign: 'center',
display: 'block',
padding: '10px', // Adjust the padding as needed
backgroundColor: 'yellow',
color: 'black',

border: 'none',
borderRadius: '5px',
cursor: 'pointer',
margin: '10px auto', // Center the button horizontally and adjust the vertical margin
}}
// onClick={() => window.location.href = '/chatbot'} // Use onClick to navigate to /chatbot
>
<a href="https://youai.ai/ais/4f97ff3c-f783-4a78-b275-dd273be0fd03?draftVersionId=b9d2a37f-fa0b-4526-bd50-770f4da07d5e" rel="noopener noreferrer">
          Get a Quick Guidance
        </a>

</button>

<div className=' w-full h-screen items-center justify-center'>
<div className=" w-full h-screen item-center justify-center p-8 rounded shadow-lg flex flex-col border-8 border-pink-600">
<div><h1 className="text-4xl font-bold mb-4 text-center">Rajasthan Police</h1></div>
<div><h2 className="text-2xl mb-4 py-11 text-center">Need to protect from any fraud.</h2></div>
<div className='flex justify-center'>

</div>
<div>
<section className="text-center mt-8">
  <h3 className="text-lg font-semibold mb-2">Hello everyone! Here is a broad Solution for any type of Mislead or Fraud</h3>
  <p>Presented by Rajasthan Police on 1930 Helpline</p>
</section>
</div>
</div>
</div>

</div>
</div>
  );
}

export default Dashboard;
