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
            <a href="https://youai.ai/ais/4f97ff3c-f783-4a78-b275-dd273be0fd03?draftVersionId=b9d2a37f-fa0b-4526-bd50-770f4da07d5e" rel="noopener noreferrer">
          Chatbot
        </a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="image-container">
      <img className='w-[1050px] mx-auto' src={rcover_page} alt='/' />
    </div>

    <div className="ask-to-query">


<button
style={{
textAlign: 'center',
display: 'block',
padding: '10px', // Adjust the padding as needed
backgroundColor: 'orange',
color: 'black',

border: 'none',
borderRadius: '5px',
cursor: 'pointer',
margin: '10px auto', // Center the button horizontally and adjust the vertical margin
}}
>
<a href="https://youai.ai/ais/4f97ff3c-f783-4a78-b275-dd273be0fd03?draftVersionId=b9d2a37f-fa0b-4526-bd50-770f4da07d5e" rel="noopener noreferrer">
          Get a Quick Guidance
        </a>

</button>

</div>
</div>
);
}

export default Dashboard;
