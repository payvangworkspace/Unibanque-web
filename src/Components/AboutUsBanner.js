import React from "react";
import { Link } from "react-router-dom";
import '../External CSS/AboutUsBanner.css';
const AboutUsBanner = () => {
  return (
    <div className="mission-banner">
      <div className="overlay">
        <h1 className="aboutus-title">About Us</h1>
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">|</span>
          <span className="breadcrumb-current">About Us</span>
        </nav>
      </div>
    </div>
  );
};

export default AboutUsBanner;
