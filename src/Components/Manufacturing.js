import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../External CSS/Manufacturing.css';
import { Link } from 'react-router-dom';

const Manufacturing = () => {
  return (
    <section className="manufacturing-section">
      <div className="manufacturing-container">
        <div className="manufacturing-header">
          <h2>Driving Transformation in Manufacturing</h2>
          <p>
            We empower manufacturers with tailored financial solutions to boost innovation, streamline operations, and enhance global competitiveness.
          </p>
        </div>

        <div className="manufacturing-cards">
          <div className="manufacturing-card">
            <img src={`${process.env.PUBLIC_URL}/smartfactory.jpg`} alt="Smart Manufacturing" />
            <h3>Smart Manufacturing</h3>
            <p>
              Enable digital transformation with financing for automation, analytics, and modern industrial systems. Our solutions ensure your plant remains agile, data-driven, and ready for the future.
            </p>
            <Link to="#" className="learn-more-btn">
              Know More <FaArrowRight className="btn-icon" />
            </Link>
          </div>

          <div className="manufacturing-card">
            <img src={`${process.env.PUBLIC_URL}/supplychain.jpg`} alt="Supply Chain Optimization" />
            <h3>Supply Chain Optimization</h3>
            <p>
              Improve supply chain agility with funding models that support resilience, continuity, and global logistics. We offer the financial tools to mitigate risks and maximize efficiency.
            </p>
            <Link to="#" className="learn-more-btn">
              Know More <FaArrowRight className="btn-icon" />
            </Link>
          </div>

          <div className="manufacturing-card">
            <img src={`${process.env.PUBLIC_URL}/innovationhub.jpg`} alt="Innovation & R&D" />
            <h3>Innovation & R&D</h3>
            <p>
              Support your R&D goals with innovation financing, helping bring new ideas to market efficiently. We back your ambitions with advisory support and scalable funding.
            </p>
            <Link to="#" className="learn-more-btn">
              Know More <FaArrowRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
