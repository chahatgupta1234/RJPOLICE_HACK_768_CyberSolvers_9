import { Link } from 'react-router-dom';
import rcover_page from "../assets/rcover_page.jpg";

function Dashboard() {

  return ( 
    <div>  
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
<button
style={{
textAlign: 'center',
padding: '10px', // Adjust the padding as need70
backgroundColor: 'black',
color: 'white',
top:'60%',
left:'75%',
border: 'none',
borderRadius: '7px',
cursor: 'pointer',
margin: '10px auto', // Center the button horizontally and adjust the vertical margin
position:'absolute',
}}
>
<a href="https://youai.ai/ais/4f97ff3c-f783-4a78-b275-dd273be0fd03?draftVersionId=b9d2a37f-fa0b-4526-bd50-770f4da07d5e"  style={{textDecoration: 'none',color:'white',fontSize:'XX-large'}}>
          GET A GUIDENCE
        </a>

</button>

</div>
</div>
);
}

export default Dashboard;
