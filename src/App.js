import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import NotesList from './components/NotesList';
import Navbar from './components/Navbar';
import { isAuthenticated } from './utils/auth';

function App() {

  const [auth,setAuth] = useState(isAuthenticated());
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/notes" element={isAuthenticated() ? <NotesList /> : <Navigate to="/login" />} />
{/* <Route */}
{/*   path="/notes" */}
{/*   // element={auth ? <NotesList /> : <Navigate to="/login" /> */}
{/*   element={<Login /> */}
{/*               } */}
{/* /> */}
            {/* <Route path="/notes" element={<NotesList />} /> */}
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;








//
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import NotesList from './components/NotesList';
// import Navbar from './components/Navbar';
// import { isAuthenticated } from './utils/auth';
//
// function App() {
//   const [auth] = useState(isAuthenticated()); // Remove setAuth since it's unused
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         <Navbar />
//         <div className="container mx-auto p-4">
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route
//               path="/notes"
//               element={auth ? <NotesList /> : <Navigate to="/login" />}
//             />
//             <Route path="/" element={<Navigate to="/login" />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }
//
// export default App;
