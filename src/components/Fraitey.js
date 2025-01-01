import React from "react";
import "../components/styles/Fraitey.css";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FS1image from "../asserts/F-Section1-image.png";
import FS4img1 from "../asserts/F-Section4-image1.png";
import FS4img2 from "../asserts/F-Section4-image2.png";
import FS6img from "../asserts/F-Section6-image1.png";
import FS7img from "../asserts/F-Section7-image1.png";
import icon1 from "../asserts/icon1.svg";
import icon2 from "../asserts/icon2.svg";
import icon3 from "../asserts/icon3.svg";
import icon4 from "../asserts/icon4.svg";
import icon5 from "../asserts/icon5.svg";
import icon6 from "../asserts/icon6.svg";
import icon7 from "../asserts/icon7.svg";
import centerimg from "../asserts/FS3img.png";
import { useNavigate } from "react-router-dom";
const Fraitey = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Navbar />
      <div className="Fraitey-container">
        <div className="F-Section1-container">
          <div className="F-Section1">
            <div className="F-Section1-Left">
              <p className="FS1">TSO</p>
              <p className="FS2">Complex freight validation, made easy,</p>
              <p className="FS3">
                Your people, spreadsheets, documents and emails all cover the
                gaps in your P2P and 02C processes and systems, costing you time
                and money.
              </p>
            </div>
            <div className="F-Section1-Right">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "ease", duration: 1.0 }}
                style={{ overflow: "hidden", width: "100%", height: "100%" }}
              >
                <img src={FS1image} alt="F-Section1-image" />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="F-Section2-container">
          <div className="F-Section2">
            <p className="FS2-text">
              Fraitey automates complex freight document and image processing -
              giving your people an easier process to manage, saving you time
              and money.
            </p>
            <button className="FS2-button" onClick={handleNavigation}>
              Find out how
            </button>
          </div>
        </div>
        <div className="F-Section3-container">
          <div className="F-Section3">
            <p className="FS3text1">
              Manage complexity, easily and efficiently.
            </p>
            <div className="CARD">
              <div className="flip-container">
                <div className="flip-inner">
                  <div className="flip-front">
                    <div className="ICON">
                      <img src={icon3} alt="ICON3" />
                    </div>
                  </div>
                  <div className="flip-back">
                    <div className="TEXT">
                      <p className="TEXT1">Intelligent Classification</p>
                      <p className="TEXT2">
                        Recognising, understanding and treating different
                        document types.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="FS3sec2">
              <div>
                <div className="CARD">
                  <div className="flip-container">
                    <div className="flip-inner">
                      <div className="flip-front">
                        <div className="ICON">
                          <img src={icon1} alt="ICON3" />
                        </div>
                      </div>
                      <div className="flip-back">
                        <div className="TEXT">
                          <p className="TEXT1">Contextual Intelligence .</p>
                          <p className="TEXT2">
                            Retrieving,- reading & understanding emails,
                            document content end images
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="CARD">
                  <div className="flip-container">
                    <div className="flip-inner">
                      <div className="flip-front">
                        <div className="ICON">
                          <img src={icon2} alt="ICON2" />
                        </div>
                      </div>
                      <div className="flip-back">
                        <div className="TEXT">
                          <p className="TEXT1">Predictive</p>
                          <p className="TEXT2">
                            Learning and creating predictive forecasting and
                            insights.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="CENTER">
                <img src={centerimg} alt="center img" />
              </div>
              <div>
                <div className="CARD">
                  <div className="flip-container">
                    <div className="flip-inner">
                      <div className="flip-front">
                        <div className="ICON">
                          <img src={icon5} alt="ICON5" />
                        </div>
                      </div>
                      <div className="flip-back">
                        <div className="TEXT">
                          <p className="TEXT1">Intelligent Extraction</p>
                          <p className="TEXT2">
                            Digitising and extracting 1000s of lines of data and
                            information from documents and images.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="CARD">
                  <div className="flip-container">
                    <div className="flip-inner">
                      <div className="flip-front">
                        <div className="ICON">
                          <img src={icon7} alt="ICON6" />
                        </div>
                      </div>
                      <div className="flip-back">
                        <div className="TEXT">
                          <p className="TEXT1">Business Logic</p>
                          <p className="TEXT2">
                            Conducting complex calculations — validating rates,
                            levies and surcharges.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="FS3sec3">
              <div className="CARD">
                <div className="flip-container">
                  <div className="flip-inner">
                    <div className="flip-front">
                      <div className="ICON">
                        <img src={icon4} alt="ICON3" />
                      </div>
                    </div>
                    <div className="flip-back">
                      <div className="TEXT">
                        <p className="TEXT1">Workflow Automation</p>
                        <p className="TEXT2">
                          Sending correspondence to suppliers and team members.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="CARD">
                <div className="flip-container">
                  <div className="flip-inner">
                    <div className="flip-front">
                      <div className="ICON">
                        <img src={icon6} alt="ICON3" />
                      </div>
                    </div>
                    <div className="flip-back">
                      <div className="TEXT">
                        <p className="TEXT1">Actionable Intelligence</p>
                        <p className="TEXT2">
                          Finding and presenting anomalies and actionable
                          intelligence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="F-Section4-container">
          <div className="Special-Section4">
            <p className="SPFS4-text1">
              "Fraitey does all the heavy lifting to ensure we are paying the
              correct rates across our supply chain network..."
            </p>
            <p className="SPFS4-text2">HEAD OF SUPPLY CHAIN LOGISTICS. FMCG</p>
            <div className="FS4img2">
              <img src={FS4img2} alt="F-Section4-image2" />
            </div>
          </div>
          <div className="SPD">
            <div className="FS4img1">
              <img src={FS4img1} alt="F-Section4-image1" />
            </div>
            <div className="FS4img2">
              <img src={FS4img2} alt="F-Section4-image2" />
            </div>
          </div>
        </div>
        <div className="F-Section5-container">
          <div className="F-Section5">
            <div className="F-Section5-left">
              <p className="FS5text1">
                Create cost transparency and be confident that you're paying
                what you should be.
              </p>
            </div>
            <div className="F-Section5-right">
              <p className="FS5text2">
                Retail and FMCG businesses rely on supply chain logistic
                solutions to produce and distribute their products, but
                reconciling orders and invoices is a manual task that is prone
                to errors — and, is humanly impossible to validate and calculate
                every single line item, against multiple data-points and
                systems.
              </p>
              <p className="FS5text2">
                Fraitey does all the time consuming and complex calculations to
                ensure that you're paying the correct rates across your supply
                chain network.
              </p>
              <p className="FS5text2">
                Fraitey rapidly validates all of your freight costs, without
                laborious manual intervention — giving you greater control and
                transparency over your freight costs, whilst simplifying your
                process.
              </p>
            </div>
          </div>
        </div>
        <div className="F-Section6-container">
          <div className="F-Section6">
            <div className="F-Section6-left">
              <p className="FS61">Keep customers happy and get paid on time.</p>
              <p className="FS62">
                3PL's and supply chain solution providers can get overrun with
                the dynamic nature of the services that they provide to their
                customers. The multi-modal logistics, heavily manual back office
                processing, and complex billing calculations can result in
                errors and rework — impacting time-to-cash cycles, creating poor
                customer experiences, and lost
              </p>
              <p className="FS62">
                Fraitey efficiently validates all the activity data against
                customer rates to capture any over or undercharges before you
                issue a customer invoice — helping to simplify the billing
                process and ensure you keep your customers happy and paying on
                time.
              </p>
            </div>
            <div className="F-Section6-right">
              <img src={FS6img} alt="FS6img" />
            </div>
          </div>
        </div>

        <div className="F-Section7-container">
          <div className="F-Section7">
            <div className="F7-left">
              <p className="FS7-text1">Freight Audit and Payments.</p>
              <p className="FS7-text2">
                Find out how Fraitey can help you with your FAP compliance.
              </p>
              <button className="FS2-button" onClick={handleNavigation}>
                Get in touch
              </button>
            </div>
            <div className="F7-right">
              <img src={FS7img} alt="FS7img" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fraitey;
