import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import { homelogo } from "../asserts/homelogo1.png";
import homelogo from "../asserts/homelogo1.png";
import "./styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Navbar">
      <div className="navbar-container">
        <div className="home-logo">
          <img src={homelogo} alt="Home Logo" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className={`navbar-items ${isMenuOpen ? "active" : ""}`}>
          <li className="NV1">
            <Link to="/fraitey">Transmission (TSO)</Link>
          </li>
          <li>
            <Link to="/trepo">Distribution (DSO)</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <button className="book-a-demo">Book a demo</button>
      </div>
    </div>
  );
};

export default Navbar;
