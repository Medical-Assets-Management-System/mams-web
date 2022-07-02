import React from "react";
import "./Loginscreen.css";
import LoginFrom from "../../components/LoginForm/LoginFrom";
import loginimg from "../../assets/Images/login.png";
export const LoginScreen = () => {
  return (
    <div className="login-container">
      <div className="img-flex">
        <img src={loginimg} alt="loginimg" />
      </div>
      <div className="form-flex">
        <LoginFrom />
      </div>
    </div>
  );
};
