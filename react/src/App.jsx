import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ChatBotPage from './Pages/ChatBotPage';
import Login from './Pages/Login';
import './App.css'; // Import your CSS file for styling
import Dashboard from './Pages/Dashboard';
// import {Route, Routes} from 'react-router-dom';
import axios from "axios";
import ComplainForm from './Pages/ComplainForm';

axios.defaults.baseURL = 'http://localhost:3001';

function App() {


  return (
  <>   
    <Router>
      <Route index component={Dashboard} />
      <Route path="/chatbot" component={ChatBotPage} />
      <Route path="/login" component={Login} />
      <Route path="/complain" component={ComplainForm} />
    </Router>

    </>
  )
};

export default App;


