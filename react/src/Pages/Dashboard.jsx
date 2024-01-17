import { Link } from 'react-router-dom';
import rcover_page from "../assets/rcover_page.jpg";

function Dashboard() {


  return ( 
    <div>
      <div style={{fontFamily:'fantasy',fontSize:'xxx-large',color:'black',position:'fixed', zIndex:1,top:'10px'}}>CyberSolvers

                  </div>
    <nav className="navbar">
      <div className="right-links">
        <ul>
        <li>
          <Link to="/dashboard"><button>Home</button></Link>
        </li>
          
          <li>
            <Link to="/login"><button>Login</button></Link>
          </li>
          <li>
            <Link to="/register"><button>Register</button></Link>
          </li>
          <li>
            <a href="https://youai.ai/ais/4f97ff3c-f783-4a78-b275-dd273be0fd03?draftVersionId=b9d2a37f-fa0b-4526-bd50-770f4da07d5e" rel="noopener noreferrer"><button>
          Chatbot
          </button>
        </a>
          </li>
        </ul>
      </div>
    </nav>

    

    <div className="ask-to-query items-center">
<p style={{ color: 'gray', fontWeight: 'bold', fontSize: '50px', textAlign: 'center' }}>
Ask Any Query
</p>


<button
style={{
textAlign: 'center',
padding: '10px', // Adjust the padding as needed
backgroundColor: 'black',
color: 'white',
top:'500px',

border: 'none',
borderRadius: '15px',
cursor: 'pointer',
margin: '10px auto', // Center the button horizontally and adjust the vertical margin
}}
// onClick={() => window.location.href = '/chatbot'} // Use onClick to navigate to /chatbot
>
<a href="https://youai.ai/ais/4f97ff3c-f783-4a78-b275-dd273be0fd03?draftVersionId=b9d2a37f-fa0b-4526-bd50-770f4da07d5e" rel="noopener noreferrer" style={{textDecoration: 'none',color:'white'}}>
          Get a Quick Guidance
        </a>

</button>

{/* <div className=' w-full h-screen items-center justify-center'>
<div className=" w-full h-screen item-center justify-center p-8 rounded shadow-lg flex flex-col border-8 border-pink-600">
<div><h1 className="text-4xl font-bold mb-4 text-center">Rajasthan Police</h1></div>
<div><h2 className="text-2xl mb-4 py-11 text-center">Need to protect from any fraud.</h2></div>

<div>
<section className="text-center mt-8">
  <h3 className="text-lg font-semibold mb-2">Hello everyone! Here is a broad Solution for any type of Mislead or Fraud</h3>
  <p>Presented by Rajasthan Police on 1930 Helpline</p>
</section>
</div>
</div>
</div> */}

</div>
</div>
  );
}

export default Dashboard;
