import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/Home.css";
import HS1img from "../asserts/F-Section1-image.png";
import clogo1 from "../asserts/clogo1.png";
import clogo2 from "../asserts/clogo2.png";
import clogo3 from "../asserts/clogo3.png";
import clogo4 from "../asserts/clogo4.png";
import clogo5 from "../asserts/clogo5.png";
import clogo6 from "../asserts/clogo6.png";
import HS3img1 from "../asserts/HS3img1.png";
import HS3img2 from "../asserts/HS3img2.png";
import { motion } from "framer-motion";
import HS4img1 from "../asserts/HS4img1.png";
import HS4img2 from "../asserts/HS4img2.png";
import HS4img3 from "../asserts/HS4img3.png";
import HS6img from "../asserts/section1-logo.png";
import HS8img1 from "../asserts/HS8img1.png";
import HS8img2 from "../asserts/HS8img2.png";
import HS8img3 from "../asserts/HS8img3.png";
import HS9img from "../asserts/HS9img.png";
import HS10img1 from "../asserts/HS10img1.svg";
import HS10img2 from "../asserts/HS10img2.svg";
import HS10img3 from "../asserts/HS10img3.svg";
import HS10img4 from "../asserts/HS10img4.svg";
import HS10img5 from "../asserts/HS10img5.svg";
import HS10img6 from "../asserts/HS10img6.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/contact");
  };
  return (
    <div>
      <Navbar />
      <div className="Home-Container">
        <div className="HS1-container">
          <div className="HS1">
            <div className="HS1-left">
              <p className="HS1text1">
                Vidrona: AI-Powered Predictive Analytics for Asset Management
              </p>
              <p className="HS1text2">
                Increasing the speed, accuracy, and efficiency of Order-to-Cash
                and Procure-to-Pay processes across supply chain logistics.
              </p>
              <div className="">
                <button className="HS1button1" onClick={handleNavigation}>
                  Find out more
                </button>
              </div>
            </div>
            <div className="HS1-right">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "ease", duration: 1.0 }}
                style={{ overflow: "hidden", width: "100%", height: "100%" }}
              >
                <img src={HS1img} alt="Home Image 1" />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="HS2-container">
          <div className="HS2">
            <p className="HS2text1">
              Leading Australian companies we work with
            </p>
            <div className="HS2companylogoconatiner">
              <div className="HS2logo">
                <img src={clogo1} alt="clogo1" />
              </div>
              <div className="HS2logo">
                <img src={clogo2} alt="clogo2" />
              </div>
              <div className="HS2logo">
                <img src={clogo3} alt="clogo3" />
              </div>
              <div className="HS2logo">
                <img src={clogo4} alt="clogo4" />
              </div>
              <div className="HS2logo">
                <img src={clogo5} alt="clogo5" />
              </div>
              <div className="HS2logo">
                <img src={clogo6} alt="clogo6" />
              </div>
            </div>
          </div>
        </div>
        <div className="HS3-container">
          <div className="HS3">
            <div className="HS3-img1">
              <img src={HS3img1} alt="HS3img1" />
            </div>
            <div className="HS3-img2">
              <img src={HS3img2} alt="HS3img2" />
            </div>
          </div>
        </div>
        <div className="HS4-container">
          <div className="HS4">
            <p className="HS4text">
              We are a proud Australian company, passionate about helping
              businesses succeed, using ethical and explainable A.I.
            </p>
            <p className="HS4text">
              We believe that human intellect should be maximised in the
              workplace and not get bogged down with mundane processes.
            </p>
          </div>
        </div>
        <div className="HS5-container">
          <div className="HS5">
            <div className="HS5C">
              <div className="HS5TEXT">
                <p className="HS5text1">Save Time & Money</p>
                <p className="HS5text2">
                  Save time by automating up to 9096 of your manual processing.
                  Prevent revenue leakage and avoid the risks of unaccounted
                  liabilities.
                </p>
              </div>
              <div className="HS5IMAGE">
                <img src={HS4img1} alt="HS5img1" />
              </div>
            </div>
            <div className="HS5C">
              <div className="HS5IMAGE">
                <img src={HS4img2} alt="HS5img2" />
              </div>
              <div className="HS5TEXT">
                <p className="HS5text1">Insights & Control</p>
                <p className="HS5text2">
                  Create near real time cost transparency, know your
                  cost-to-serve and produce richer insights to make better
                  data-driven decisions.
                </p>
              </div>
            </div>
            <div className="HS5C">
              <div className="HS5TEXT">
                <p className="HS5text1">Experience</p>
                <p className="HS5text2">
                  Improve your Time-to-Process and Time-to- Pay cycles, prevent
                  errors, and elevate the experience of your people, customers
                  and suppliers.
                </p>
              </div>
              <div className="HS5IMAGE">
                <img src={HS4img3} alt="HS5img3" />
              </div>
            </div>
          </div>
        </div>
        <div className="HS6-container">
          <div className="HS6">
            <div className="HS6IMAGE">
              <img src={HS6img} alt="HS6img" />
            </div>
            <div className="HS6TEXT">
              <p className="HS6text1">Achieve greater back-office efficiency</p>
            </div>
          </div>
        </div>
        <div className="HS7-container">
          <div className="HS7">
            <div className="HS7BOX1">
              <p className="HST7text1">92.7%</p>
              <p className="HST7text2">
                Our customers have achieved up to 92.7% automated state across
                their P-2-P & 0-2-C processes
              </p>
            </div>
            <div className="HS7BOX1">
              <p className="HST7text1">60s</p>
              <p className="HST7text2">
                Our customers have reduced their cycle times from days, down to
                seconds
              </p>
            </div>
            <div className="HS7BOX1">
              <p className="HST7text1">3x</p>
              <p className="HST7text2">
                Our customers have achieved 3x in- year Return on Investment
              </p>
            </div>
          </div>
        </div>
        <div className="HS8-container">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="HS8"
          >
            <SwiperSlide>
              <img src={HS8img1} alt="HS8img1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HS8img2} alt="HS8img2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HS8img3} alt="HS8img3" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="HS9-container">
          <div className="HS9">
            <div className="HS9TEXT">
              <p className="HS9text1">
                Get up and running in weeks, not months.
              </p>
              <p className="HS9text2">
                We know it's important to create value, quickly. Achieve rapid
                time-to-value, and deliver in year savings.
              </p>
              <button className="HS1button1" onClick={handleNavigation}>
                Book a demo
              </button>
            </div>
            <div className="HS9IMAGE">
              <img src={HS9img} alt="HS9img" />
            </div>
          </div>
        </div>
        <div className="HS10-container">
          <div className="HS10">
            <p className="HS10text1">Security & Standards</p>
            <p className="HS10text2">
              provenioai is hosted on Amazon Web Services (AWS) ensuring our
              customers benefit from region-specific regulatory hosting,
              in-country data availability and security standards, including ISO
              27001.
            </p>
            <p className="HS10text3">
              We follow strict security, data encryption and data storage
              policies and protocols.
            </p>
            <div className="HS10logoandtext">
              <div className="HS10C">
                <img src={HS10img1} alt="HS10img1" />
                <div className="separator"></div>
                <p className="HS10text4">All data secured within Country</p>
              </div>

              <div className="HS10C">
                <img src={HS10img2} alt="HS10img2" />
                <div className="separator"></div>
                <p className="HS10text4">
                  End-to-End Data Encryption while at rest and motion
                </p>
              </div>

              <div className="HS10C">
                <img src={HS10img3} alt="HS10img3" />
                <div className="separator"></div>
                <p className="HS10text4">
                  Enhanced Vulnerability Protection a Compliance Management
                </p>
              </div>

              <div className="HS10C">
                <img src={HS10img4} alt="HS10img4" />
                <div className="separator"></div>
                <p className="HS10text4">
                  Access Management and Role Based Control for Users
                </p>
              </div>

              <div className="HS10C">
                <img src={HS10img5} alt="HS10img5" />
                <div className="separator"></div>
                <p className="HS10text4">
                  Authentication methods such as 2FA and SSO
                </p>
              </div>

              <div className="HS10C">
                <img src={HS10img6} alt="HS10img6" />
                <div className="separator"></div>
                <p className="HS10text4">
                  Full Traceability and AI explainability
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="HS11-container">
          <div className="HS11C">
            <div className="HS11">
              <div className="HS11TEXT">
                <p className="HS11text1">Take the next step</p>
                <p className="HS11text2">
                  Start transforming your back-office processes with our ethical
                  and explainable Al-powered solutions and products. Request a
                  demo with a member of our friendly team.
                </p>
              </div>
              <div className="HS11BUTTON">
                <button className="HS1button1" onClick={handleNavigation}>
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
