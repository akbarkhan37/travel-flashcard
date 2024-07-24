import React from "react";
import "./Logo.css";
import siteLogo from "../assets/logo.jpg";
const Logo = () => {
  return (
    <div className="site-logo">
      <img src={siteLogo} alt="" className="logoimg" />
      <h1>Far Away</h1>
    </div>
  );
};

export default Logo;
