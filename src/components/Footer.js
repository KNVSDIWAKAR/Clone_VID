import React from "react";
import "../components/styles/Footer.css";
import homelogo from "../asserts/section1-logo.png";
import homelogo1 from "../asserts/Footer-logo.png";
import { Link } from "react-router-dom";

import linkedinLogo from "../asserts/linkedin-logo.png";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-logo">
          <img src={homelogo1} alt="Home Logo" />
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
                  <a href="#home">Home</a>
                </li>
                <li>
                  <img src={homelogo} alt="Home Logo" />
                  <a href="#fraitey">
                    <Link to="/fraitey">Fraitey</Link>
                  </a>
                </li>
                <li>
                  <img src={homelogo} alt="Home Logo" />
                  <a href="#trepo">
                    <Link to="/trepo">TrePo</Link>
                  </a>
                </li>
                <li>
                  <img src={homelogo} alt="Home Logo" />
                  <a href="#book-demo">
                    <Link to="/contact">Book a demo</Link>
                  </a>
                </li>
              </ul>
            </div>
            <div className="SH1">
              <p className="FH1">Contact</p>
              <ul className="footer-links">
                <li>
                  <a href="#">@aividrona.com</a>
                </li>
                <li>
                  <a href="#">02 8667 5398</a>
                </li>
              </ul>
            </div>
            <div className="SH1">
              <p className="FH1">Address</p>
              {/* G10 Atlas Building European Space Agency: BIC Campus, Fermi Avenue, Harwell, Didcot OX11  0QX,UK */}
              <p>G10 Atlas Building European Space Agency:</p>
              <p>BIC Campus, </p>
              <p>Fermi Avenue, Harwell, Didcot</p>
              <p>OX11 0QX,UK</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="TH2">© 2024 - ProvenioAI | All Rights Reserved</p>
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
