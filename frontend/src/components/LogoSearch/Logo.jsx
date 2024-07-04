import React from "react";
import logoImg from "../../img/logoImg.png";
import './LogoSearch.css' 
const Logo = () => {
  return (
    <div className="LogoSearch">
      <a href="/home"><img className="logoImage" src={logoImg} alt=""/> </a>
    </div>
  );
};

export default Logo;
