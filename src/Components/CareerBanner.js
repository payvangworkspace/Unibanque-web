import React from "react";
import { Link } from "react-router-dom";
import '../External CSS/AboutUsBanner.css';
const CareerBanner = () => {
  return (
    <div className="aboutus-banner">
      <div className="overlay">
        <h1 className="aboutus-title">Career</h1>
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">|</span>
          <span className="breadcrumb-current">Career</span>
        </nav>
      </div>
    </div>
  );
};

export default CareerBanner;
