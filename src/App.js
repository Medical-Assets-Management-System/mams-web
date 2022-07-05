import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import LoginFrom from "./components/LoginForm/LoginFrom";
import DashboardScreen from "./pages/Dashboard/DashboardScreen";
import { LoginScreen } from "./pages/Login/LoginScreen";
import ViewDevice from "./pages/viewDevice/viewDevice";

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="dashboard" element={<DashboardScreen />} />
        <Route path="dashboard/viewDevice:deviceID" element={<ViewDevice />} />
      </Routes>
    </div>
  );
}
