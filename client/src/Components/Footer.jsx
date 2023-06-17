import React from "react";
import Logo  from "../Assets/img/logo.svg";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <div className="text">
        Сделано с &#128150; к путешествиям и исследованиям!
      </div>
    </footer>
  );
};

export default Footer;