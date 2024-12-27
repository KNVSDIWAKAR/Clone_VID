import React from "react";
import "../components/styles/TrePo.css";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TS1img from "../asserts/TS1img.png";
import TS4img from "../asserts/TS4img.png";
import TS5img from "../asserts/TS5img.png";
import { useNavigate } from "react-router-dom";
const TrePo = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Navbar />
      <div className="trePo-container">
        <div className="TS1-container">
          <div className="TS1">
            <div className="TS1-left">
              <p className="TS1text1">DSO</p>
              <p className="TS1text2">
                Advanced artificial intelligence to automate procure-to-pay.
              </p>
              <p className="TS1text3">
                trePO uses advanced A.I. and M.L. to digitise and intelligently
                automate up to 90% of the P2P process.
              </p>
              <p className="TS1text3">
                By reducing exceptions and automating complex and time consuming
                3-way PO matches, trePO saves you time and improves your
                time-to-process.
              </p>
            </div>
            <div className="TS1-right">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "ease", duration: 1.0 }}
                style={{ overflow: "hidden", width: "100%", height: "100%" }}
              >
                <img src={TS1img} alt="TS1img" />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="TS2-container">
          <div className="TS2">
            <p className="TS2text1">
              Reduce manual intervention whilst rapidly improving
              time-to-process and time-to-pay cycles, down to a matter of
              seconds!
            </p>
            <button className="book-a-demo1" onClick={handleNavigation}>
              Find out how
            </button>
          </div>
        </div>
        <div className="TS3-container">
          <div className="TS3">
            <div className="TS3box">
              <p className="TS3boxhead">23.4s</p>
              <p className="TS3boxcontent">
                Average time that it takes our customers to process complex,
                non- standard, multi-page invoices
              </p>
            </div>
            <div className="TS3box">
              <p className="TS3boxhead">99.7%</p>
              <p className="TS3boxcontent">
                Realised improvement of Time-to- Process cycle by our customers
              </p>
            </div>
            <div className="TS3box">
              <p className="TS3boxhead">3x</p>
              <p className="TS3boxcontent">
                Our customers have achieved 3x in- year ROI
              </p>
            </div>
          </div>
        </div>
        <div className="TS4-container">
          <div className="TS4">
            <div className="TS4-left">
              <img src={TS4img} alt="TS4img" />
            </div>
            <div className="TS4-right">
              <p className="TS4text1">HEAD OF FINANCE PERSPECTIVE</p>
              <p className="TS4text2">
                "trePO has helped us reduce the amount of manual work involved
                in our high-volume Procure-to-Pay process, giving time back to
                focus on other priorities.
              </p>
              <p className="TS4text2">
                trePO has automated our complex and time- consuming 3-way PO
                matching process, making it simpler and more efficient to
                manage."
              </p>
              <p className="TS4text3">FINANCIAL CONTROLLER, FMCG</p>
            </div>
          </div>
        </div>
        <div className="TS5-container">
          <div className="TS5">
            <div className="TS5-left">
              <p className="TS5text1">
                trePO turbo-charges your accounts payable process.
              </p>
              <p className="TS5text2">
                Taking away all the manual keying, alerting you to the few
                things that need your attention, and having invoices ready for
                payment in under a minute!
              </p>
            </div>
            <div className="TS5-right">
              <img src={TS5img} alt="TS5img" />
            </div>
          </div>
        </div>

        <div className="TS6-container">
          <div className="TS6">
            <div className="TS6-left">
              <p className="TS6text1">Take the next step</p>
              <p className="TS6text2">
                Start transforming your back-office processes with our ethical
                and explainable Al-powered solutions and products. Request a
                demo with a member of our friendly team.
              </p>
              <button className="book-a-demo2" onClick={handleNavigation}>
                Book a demo
              </button>
            </div>
            <div className="TS6-right">
              <img src={TS4img} alt="TS4img" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrePo;
