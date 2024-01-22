import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PublicRoutes from "./Public/PublicRoutes";
import ProtectedRoutes from "./Protected/ProtectedRoutes";

import Profile from "../pages/appStack/profile";
import Dashboard from "../pages/appStack/dashboard/dashboard";
import SidebarNavbarWrapper from "../components/Layouts/SidebarNavbarWrapper";

import Login from "../pages/authStack/Auth/Login";
import Denied from "../pages/errorStack";
import Employes from "../pages/appStack/Gestion RH/Employés/Employes";
import Admins from "../pages/appStack/Admins";
import Club from "../pages/appStack/FIrst_Section/Club";
import Abonnement from "../pages/appStack/FIrst_Section/Abonnement/Abonnement";


const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    <Route path="/" element={<ProtectedRoutes roleRequired={"ADMIN" || "MANAGER"} />}>
        <Route element={<SidebarNavbarWrapper />}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Admins" element={<Admins />} />
          <Route path="Abonnement" element={<Abonnement />} />
          <Route path="employés" element={<Employes />} />
          <Route path="Club" element={<Club />} />
        </Route>
    </Route>

    {/** Public Routes */}
    <Route path="login" element={<PublicRoutes />}>
      <Route path="/login" element={<Login />} />
    </Route>
   
    <Route path="denied" element={<PublicRoutes />}>
      <Route path="/denied" element={<Denied />} />
    </Route>
  </Routes>
);

export default MainRoutes;
