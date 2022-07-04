import React from "react";
import "./Loginscreen.css";
import LoginFrom from "../../components/LoginForm/LoginFrom";
import loginimg from "../../assets/Images/login.png";
import logo from "../../assets/Images/logo2.jpg";
export const LoginScreen = () => {
  return (
    <div className="login-container">
      <div className="img-flex">
        <img src={logo} alt="loginimg" />
      </div>
      <div className="form-flex">
        <LoginFrom />
      </div>
    </div>
  );
};
