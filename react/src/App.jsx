import Login from './Login';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './Dashboard';
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001';

function App() {
//   return (
//     <div className="container">
//      {/* Header section */}
//       <header>
//         {/* Logo and title */}
//         <button>Share</button>
//       </header>

//       {/* Main content */}
//       <main>
//         <h1>Fraud Detection by Rajasthan Police</h1>
//         <h2>The AI Solution you need to protect from any fraud.</h2>
//         <button>Open</button>

//         <section>
//           <h3>Hello everyone! Here is a broad Solution for any type of Mislead or Fraud</h3>
//           <p>Presented by Rajasthan Police on 1930 Helpline</p>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer>
//         <p>Rajasthan Police on 1930 Helpline</p>
//       </footer>
//     </div>
//   );


  return (
    <Routes>
      <Route index element={<Login/>} />
      <Route path="/dash" element={<Dashboard/>} />
    </Routes>
  )

}

export default App
