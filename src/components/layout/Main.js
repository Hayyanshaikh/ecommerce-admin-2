import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import CustomRoutes from './Routes.js';

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/panel' || location.pathname === '/') {
      navigate('/admin');
    }
  }, [location, navigate]);

  return (
    <div className="main">
      <Routes>
        {CustomRoutes.map((route, key) => (
          <Route
            key={key}
            path={`${route.path}`}
            element={route.component}
          />
        ))}
      </Routes>
    </div>
  );
};

export default Main;
