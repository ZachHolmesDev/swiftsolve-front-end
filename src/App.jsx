import React from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';


import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * A component that renders its children only if the user is authenticated.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The children to be rendered if the user is authenticated.
 * @returns {ReactNode|null} - The rendered children or null if the user is not authenticated.
 */
const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  const isAuthenticated = () => {
    const token = localStorage.getItem('jwt');
    return token != null;
  };

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, [navigate]);

  return isAuthenticated() ? children : null;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;