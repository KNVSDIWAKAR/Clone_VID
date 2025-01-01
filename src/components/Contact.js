import React from "react";
import "../components/styles/Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TS4img from "../asserts/CS3img.png";
import CSimg from "../asserts/section1-logo.png";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Navbar />
      <div className="Contact-container">
        <div className="DS">
          <div className="CS1-container">
            <div className="CS1">
              <div className="CS1-left">
                <p className="CS1text1">Contact us to get started</p>
              </div>
              <div className="CS1-right">
                <img src={CSimg} />
              </div>
            </div>
          </div>
        </div>
        <div className="CS2-container">
          <div className="CS2">
            <div className="CS2-left">
              <p className="CS2text1">Get in touch,</p>
              <p className="CS2text1">fill out the form:</p>

              <p className="CS2text2">
                Or alternatively, you can
                <br></br>reach us here:
                <br />
                <span className="utext1"> info@aividrona.com</span>
              </p>

              <p className="CS2text3">
                G10 Atlas Building European Space Agency:
              </p>
              <p className="CS2text3">BIC Campus,</p>
              <p className="CS2text3">Fermi Avenue, Harwell, Didcot </p>
              <p className="CS2text3">OX11 0QX,UK</p>

              <p className="CS2text4">+447469231693</p>
            </div>

            <div className="CS2-right">
              <form className="contact-form">
                <div className="L1">
                  <label>First Name *</label>
                  <br></br>
                  <input type="text" placeholder="First Name *" required />
                </div>
                <div className="L1">
                  <label>Last Name *</label>
                  <br></br>
                  <input type="text" placeholder="Last Name *" required />
                </div>
                <div className="L1">
                  <label>Company *</label>
                  <br></br>
                  <input type="text" placeholder="Company *" required />
                </div>
                <div className="L1">
                  <label>Role *</label>
                  <br></br>
                  <input type="text" placeholder="Role *" required />
                </div>
                <div className="L1">
                  <label>Business Email *</label>
                  <br></br>
                  <input type="email" placeholder="Business Email *" required />
                </div>
                <div className="L1">
                  <label>Phone Number</label>
                  <br></br>
                  <input type="tel" placeholder="Phone Number" />
                </div>
                <div className="checkbox-group">
                  <p>
                    What can we provide you more information on? *
                    <br />
                    (select multiple options if required)
                  </p>
                  <label>
                    <input type="checkbox" /> Book a demo
                  </label>
                  <br />
                  <label>
                    <input type="checkbox" /> provenio.ai product information
                  </label>
                  <br />
                  <label>
                    <input type="checkbox" /> Book a discovery session for your
                    operation
                  </label>
                  <br />
                  <label>
                    <input type="checkbox" /> Other
                  </label>
                </div>
                <textarea placeholder="Any other comments" />
                <button type="submit" className="submit-btn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="CS3-container">
          <div className="CS3">
            <div className="CS3-left">
              <p className="TS6text1">Take the next step</p>
              <p className="TS6text2">
                Start transforming your back-office processes with our ethical
                and explainable Al-powered solutions and products. Request a
                demo with a member of our friendly team.
              </p>
            </div>
            <div className="CS3-right">
              <img src={TS4img} alt="TS4img" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
