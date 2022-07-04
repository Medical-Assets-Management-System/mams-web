import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginFrom from "./components/LoginForm/LoginFrom";
import DashboardScreen from "./pages/Dashboard/DashboardScreen";
import { LoginScreen } from "./pages/Login/LoginScreen";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="dashboard" element={<DashboardScreen />} />
      </Routes>
    </div>
  );
}
