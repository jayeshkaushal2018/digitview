import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const storedData = localStorage.getItem("token");
  const auth = storedData;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
