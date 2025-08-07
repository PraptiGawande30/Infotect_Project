import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.png";
import basket_icon from "../../assets/basket_icon.png";
import { Link } from 'react-router-dom'; // ✅ REQUIRED IMPORT

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link to='/'><img src={logo} alt="Logo" className="logo" /></Link>

      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</li>
        <li className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>
          <a href="#explore-menu">Menu</a>
        </li>
        <li className={menu === "mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>
          <a href="#app-download">Mobile-app</a>
        </li>
        <li className={menu === "contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>
          <a href="#footer">Contact us</a>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={basket_icon} alt="Basket" /></Link>
          <div className="dot"></div>
        </div>
      </div>

      <button onClick={() => setShowLogin(true)}>SIGN-IN</button>
    </div>
  );
};

export default Navbar;
