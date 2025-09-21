import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You must log in first");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
