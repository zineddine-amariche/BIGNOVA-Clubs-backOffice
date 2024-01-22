import React from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = ({roleRequired}) => {
  const { isAuth,role } = useSelector((state) => state.auth);

  if (roleRequired) {
    return isAuth ? (
      roleRequired === role ? (
        <Outlet />
      ) : (
        <Navigate to="/denied" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } 
 
};

export default ProtectedRoutes;
