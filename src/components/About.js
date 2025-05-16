import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./styles/About.css";
import section1logo from "../asserts/homelogo1.png";
import section3logo from "../asserts/section3-logo.png";

const About = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="section1">
          <div className="section1-container">
            <div>
              <p className="section1-text">
                Vidrona is a precision predictive analytics company specializing
                in energy asset management through advanced computer vision and
                artificial intelligence technologies3. The company offers a
                suite of web-based analytical software solutions designed to
                help clients optimize operational efficiency and asset
                performance.
              </p>
            </div>
            <div className="section1-logo">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "ease", duration: 1.0 }}
                style={{ overflow: "hidden", width: "100%", height: "100%" }}
              >
                <img src={section1logo} alt="section1logo" />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="section2-container">
            <p className="section2-text">
              Digitising and automating the flow of data across the physical
              supply chain - we free people from manual, time consuming and
              error prone processing.
            </p>
          </div>
        </div>
        <div className="section3">
          <div className="section3-container">
            <div className="section3-left">
              <div className="section3logo">
                <img src={section3logo} alt="section3logo" />
              </div>
              <p className="section3-text">
                vidrona is a privately owned and operated Australian company
                founded by three entrepreneurs: Dan Pace, Lucas Laxale, and
                Simon Lupica.
              </p>
            </div>
            <div className="section3-right">
              <p className="section3-text">
                With a keen eye for innovation and modernisation, the trio
                wanted to venture into something new and unique, which led them
                to conceptualise an Al-powered automation platform that could be
                used to help modernise the workplace and free people of outdated
                manual processes.
              </p>
              <p className="section3-text">
                The team swiftly set about adding partners: CEO Bart Heyse, CTO
                Sriram Bhargav and Head of Product & Delivery Ben Clannachan, to
                their ranks. Together, they embarked on a journey to create the
                vidrona platform.
              </p>
              <p className="section3-text">
                With pre-and post-pandemic pressure mounting on the supply chain
                logistics ecosystem, the sector was calling out for smart
                solutions that could help solve for back office inefficiencies,
                and proactively address the compounding pressures of
                people-availability and unsustainable workloads... so the team
                turned their focus to freight and logistics.
              </p>
            </div>
          </div>
        </div>
        <div className="section4">
          <div className="section4-container">
            <div>
              <FaArrowLeft size={30} color="#66c9fb" />
            </div>
            <div>
              <p className="section4-text">
                "Ethical and explainable artificial intelligence (Al) is the
                future... we're proudly creating ethical, compliant and safe —
                A.I and M.L powered solutions that automate and optimise the
                efficiencies, experience and economics of critical business
                processes for customers.
              </p>
              <br></br>
              <p className="section4-text">
                We're enabling customers to modernise their business, whilst
                delivering value extremely quickly..."
              </p>

              <p className="section4-text">
                SRIRAM BHARGAV - CHIEF TECHNOLOGY OFFICER
              </p>
              <p className="section4-text1">
                OFFICIAL FORBES TECHNOLOGY COUNCIL MEMBER
              </p>
            </div>
            <div>
              <FaArrowRight size={30} color="#66c9fb" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
