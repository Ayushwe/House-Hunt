import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './componentss/NavBar'; // Make sure the correct path is used
import LandingPage from './pagess/LandingPage'; // Correct path
import AboutUs from './pagess/AboutUsPage'; // Correct path
import PropertyPage from './pagess/PropertyPage'; // Correct path
import PropertySearch from './componentss/PropertySearch';
import LoginPage from './pagess/LoginPage.jsx';
import ContactUsPage from './pagess/ContactUsPage.jsx';
// import PrivateRoute from './componentss/PrivateRoute.jsx';
import ProfilePage from './pagess/ProfilePage.jsx';
import { PropertyProvider } from './context/PropertyContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';


const App = () => {
  return (
    <PropertyProvider>
    <AuthProvider>
      <Router>
        <div>
          <NavBar />
          <Routes>
            {/* Redirect the base URL to /home */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* Define routes */}
            <Route path="/home" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/property" element={<PropertyPage />} />
            <Route path="/search" element={<PropertySearch />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  </PropertyProvider>
  );
};

export default App;
