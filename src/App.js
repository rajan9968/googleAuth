import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import GoogleLogin from './components/GoogleLogin';
import Dashboard from './components/Dashboard';
import Pagenotfound from './components/Pagenotfound';
import { GoogleOAuthProvider } from '@react-oauth/google';
import RefeshToken from './components/RefeshToken';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId='423441159804-nvn41s9okv0f92f4iidbri8psph4heij.apps.googleusercontent.com'>
        <GoogleLogin></GoogleLogin>
      </GoogleOAuthProvider>
    )
  }

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  }

  return (
    <BrowserRouter>
      <RefeshToken setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
