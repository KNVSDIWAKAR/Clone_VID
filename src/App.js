import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Fraitey from "./components/Fraitey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TrePo from "./components/TrePo";

import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fraitey" element={<Fraitey />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trepo" element={<TrePo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
