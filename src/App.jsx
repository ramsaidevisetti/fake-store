import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './props/navbar';
import Login from './props/Login';
import { Home } from './props/Pages';
import './App.css';
import Cart from './props/Cart';
import Btechwala from './props/Btechwala';
import Signup from './props/Signup';
import AddProduct from './props/AddProduct';
import FakeDataPage from './props/FakeDataPage';

const getToken = () => localStorage.getItem("token");

const PrivateRoute = ({ children }) => {
  const token = getToken();
  return token ? children : <Navigate to="/login" />;
};

const AdminRoute = ({ children }) => {
  // For admin, you could store a flag or decode token for role.
  // Here we assume admin email is saved in localStorage for simplicity.
  const isAdmin = localStorage.getItem("email") === "admin@example.com";
  return isAdmin ? children : <Navigate to="/home" />;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());

  // Listen to storage changes in case token changes from another tab or logout
  useEffect(() => {
    const onStorageChange = () => {
      setIsLoggedIn(!!getToken());
    };
    window.addEventListener('storage', onStorageChange);
    return () => window.removeEventListener('storage', onStorageChange);
  }, []);

  return (
    <Router>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <Login onLogin={() => setIsLoggedIn(true)} />
            ) : (
              <Navigate to="/home" />
            )
          }
        />
        <Route
          path="/signup"
          element={!isLoggedIn ? <Signup /> : <Navigate to="/home" />}
        />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/btechwala"
          element={
            <PrivateRoute>
              <Btechwala />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-product"
          element={
            <PrivateRoute>
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            </PrivateRoute>
          }
        />

        <Route
          path="/fakedata"
          element={
            <PrivateRoute>
              <FakeDataPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
