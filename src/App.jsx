import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './componentss/NavBar';
import LandingPage from './pagess/LandingPage';
import AboutUs from './pagess/AboutUsPage';
import PropertyPage from './pagess/PropertyPage';
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          {/* Redirect the base URL to /home (or LandingPage) */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Define the routes */}
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Property" element={<PropertyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
