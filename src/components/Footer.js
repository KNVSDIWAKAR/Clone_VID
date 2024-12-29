import React from "react";
import "../components/styles/Footer.css";
import homelogo from "../asserts/play.svg";
import homelogo1 from "../asserts/homelogo1.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import linkedinLogo from "../asserts/linkedin-logo.png";
const Footer = () => {
  const navigate = useNavigate();
  const handleNavigation1 = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-logo">
          <img src={homelogo1} alt="Home Logo" onClick={handleNavigation1} />
        </div>
        <div className="SH2">
          <div className="SH">
            <p className="footer-description">
              AI-powered productivity for the supply chain back-office.
            </p>
            <div className="social-icons">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinLogo}
                  alt="LinkedIn Logo"
                  className="linkedin-logo"
                />
              </a>
            </div>
          </div>
          <div className="footer-content">
            <div className="SH1">
              <p className="FH1">Quick Links</p>
              <ul className="footer-links">
                <li>
                  <img src={homelogo} alt="Home Logo" />
                  <a href="#home">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                      Home
                    </Link>
                  </a>
                </li>
                <li>
                  <img src={homelogo} alt="Home Logo" />
                  <a href="#fraitey">
                    <Link to="/fraitey" onClick={() => window.scrollTo(0, 0)}>
                      TSO
                    </Link>
                  </a>
                </li>
                <li>
                  <img src={homelogo} alt="Home Logo" />
                  <a href="#trepo">
                    <Link to="/trepo" onClick={() => window.scrollTo(0, 0)}>
                      DSO
                    </Link>
                  </a>
                </li>
                <li>
                  <img src={homelogo} alt="Home Logo" />
                  <a href="#book-demo">
                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                      Book a demo
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
            <div className="SH1">
              <p className="FH1">Contact</p>
              <ul className="footer-links">
                <li>
                  <a href="#">info@aividrona.com</a>
                </li>
                <li>
                  <a href="#">+447469231693</a>
                </li>
              </ul>
            </div>
            <div className="SH1">
              <p className="FH1">Address</p>
              <p className="FH2">G10 Atlas Building European Space Agency:</p>
              <p className="FH2">BIC Campus, </p>
              <p className="FH2">Fermi Avenue, Harwell, Didcot</p>
              <p className="FH2">OX11 0QX,UK</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="TH2">© 2024 - Vidrona | All Rights Reserved</p>
          <p className="TH2">
            <a href="#terms">Terms and Conditions</a> ||{" "}
            <a href="#privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
