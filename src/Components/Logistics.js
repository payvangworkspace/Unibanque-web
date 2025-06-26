import React from 'react';
import '../External CSS/Logistics.css';
import { FaTruckMoving, FaWarehouse, FaNetworkWired, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
const Logistics = () => {
const navigate=useNavigate();
function redirectContact(){

navigate("/contact")




}




  return (
    <section className="logistics-section">
      <div className="logistics-wrapper">
        <div className="logistics-header">
          <h2>Powering Logistics and Supply Chain Excellence</h2>
          <p>
            UniBanque supports logistics companies with strategic financial tools, digital transformation solutions, and global operational intelligence to optimize supply chains, reduce costs, and scale efficiently.
          </p>
        </div>

        <div className="logistics-grid">
          <div className="logistics-card">
            <div className="logistics-icon"><FaTruckMoving /></div>
            <h3>Fleet Modernization</h3>
            <p>
              Finance sustainable logistics fleets with real-time tracking, reduced fuel usage, smart tech integration, and emission control for efficient and eco-conscious transport operations.
            </p>
            <button className="learn-more-btn" onClick={redirectContact}>Know More <FaArrowRight className="btn-icon" /></button>
          </div>

          <div className="logistics-card">
            <div className="logistics-icon"><FaWarehouse /></div>
            <h3>Warehouse Digitization</h3>
            <p>
              Transform warehouses using IoT, robotics, and automation systems to enhance inventory control, real-time monitoring, and operational efficiency across storage and distribution.
            </p>
            <button className="learn-more-btn" onClick={redirectContact}>Know More <FaArrowRight className="btn-icon" /></button>
          </div>

          <div className="logistics-card">
            <div className="logistics-icon"><FaNetworkWired /></div>
            <h3>Global Network Expansion</h3>
            <p>
              Expand your logistics footprint globally through strategic funding, digital tools, and seamless integration of cross-border operations to strengthen your worldwide supply chain.
            </p>
            <button className="learn-more-btn" onClick={redirectContact}>Know More <FaArrowRight className="btn-icon" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
