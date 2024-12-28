import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import { homelogo } from "../asserts/homelogo1.png";
import homelogo from "../asserts/homelogo1.png";
import "./styles/Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();

  const handleNavigation1 = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className="Navbar">
      <div className="navbar-container">
        <div className="home-logo">
          <img src={homelogo} alt="Home Logo" onClick={handleNavigation1} />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className={`navbar-items ${isMenuOpen ? "active" : ""}`}>
          <li className="NV1">
            <Link to="/fraitey" onClick={() => window.scrollTo(0, 0)}>
              Transmission (TSO)
            </Link>
          </li>
          <li className="NV1">
            <Link to="/trepo" onClick={() => window.scrollTo(0, 0)}>
              Distribution (DSO)
            </Link>
          </li>
          <li className="NV1">
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              About
            </Link>
          </li>
          <li className="NV1">
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              Contact Us
            </Link>
          </li>
        </ul>

        <button className="book-a-demo">Book a demo</button>
      </div>
    </div>
  );
};

export default Navbar;
