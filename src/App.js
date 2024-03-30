import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import UploadVideo from './pages/UploadVideo';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/upload" element={<UploadVideo />} />
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
    );
}


export default App;
