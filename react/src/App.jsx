import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ChatBotPage from './ChatBotPage';
import Login from './Login';
import RegisterPage from './RegisterPage';
import rcover_page from "./assets/rcover_page.jpg";

import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <Router>
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
  onClick={() => window.location.href = '/chatbot'} // Use onClick to navigate to /chatbot
>
  Go to Chatbot Page
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
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/chatbot" component={ChatBotPage} />
          <Route path="/login" component={Login} />
          
        </Switch>
      </div>
    </Router>
  );
};

export default App;


