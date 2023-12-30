import Login from './Login';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './Dashboard';
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001';

function App() {

  return (
    <Routes>
      <Route index element={<Login/>} />
      <Route path="/dash" element={<Dashboard/>} />
    </Routes>
  )
}

export default App
