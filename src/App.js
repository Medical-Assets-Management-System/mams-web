import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginFrom from "./components/LoginForm/LoginFrom";
import SignUpForm from "./components/SignUpForm";
import DashboardScreen from "./pages/Dashboard/DashboardScreen";
import { LoginScreen } from "./pages/Login/LoginScreen";
import ViewDevice from "./pages/viewDevice/viewDevice";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/viewDevice/:deviceID" element={<ViewDevice />} />
      </Routes>
    </BrowserRouter>
  );
}
