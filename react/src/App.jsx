import Login from './Login';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './Dashboard';
import axios from "axios";
import ComplainForm from './ComplainForm';

axios.defaults.baseURL = 'http://localhost:3001';

function App() {

  return (
    <Routes>
      <Route index element={<Login/>} />
      <Route path="/reg" element={<ComplainForm/>} />
      <Route path="/dash" element={<Dashboard/>} />
    </Routes>
  )
}

export default App
