import React from 'react'

import { Link } from "react-router-dom";
import '../External CSS/MissionBanner.css';
export  const MissionBanner = () => {
  return (
   <div className="aboutus-banner">
      <div className="overlay">
        <h1 className="aboutus-title">Mission and Vision</h1>
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">|</span>
          <span className="breadcrumb-current">Mission & Vision</span>
        </nav>
      </div>
    </div>
  )
}
