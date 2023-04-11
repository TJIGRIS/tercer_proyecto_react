import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Navbar } from "../components/Navbar";
import { About } from "../pages/About";
import { Portfolio } from "../pages/Portfolio";
import { Resume } from "../pages/Resume";

export const Enviador = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/porfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};
