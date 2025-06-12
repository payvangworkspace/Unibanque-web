import React from 'react'

import { Link } from "react-router-dom";
import '../External CSS/WhyChooseBanner.css';
export const WhyChooseBanner = () => {
  return (
   <div className="aboutus-banner">
      <div className="overlay">
        <h1 className="aboutus-title">Why Choose Us ?</h1>
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">|</span>
          <span className="breadcrumb-current">Why Choose Us</span>
        </nav>
      </div>
    </div>
  )
}
