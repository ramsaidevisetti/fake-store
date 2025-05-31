import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userEmail = localStorage.getItem("email");
  return userEmail ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
