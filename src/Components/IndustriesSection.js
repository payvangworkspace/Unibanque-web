import React from 'react';
import '../External CSS/IndustriesSection.css';
import { FaDollarSign, FaChartPie, FaIndustry, FaHeartbeat, FaBookOpen } from 'react-icons/fa';

const industries = [
  { icon: <FaDollarSign />, title: 'Financing', desc: 'Let us show you how our experience helps.' },
  { icon: <FaChartPie />, title: 'Capital markets', desc: 'Let us show you how our experience helps.' },
  { icon: <FaIndustry />, title: 'Manufacturing', desc: 'Let us show you how our experience helps.' },
  { icon: <FaHeartbeat />, title: 'Healthcare', desc: 'Let us show you how our experience helps.' },
  { icon: <FaBookOpen />, title: 'Higher education', desc: 'Let us show you how our experience helps.' }
];

const IndustriesSection = () => {
  return (
    <section className="industries-section">
      <div className="industries-content">
        <div className="industries-header">
          <h5>Industries We Serve</h5>
          <h2>We will gladly advise you:<br />comprehensively and individually</h2>
          <p>
            Our vertical solutions expertise allows your business to streamline workflow,
            and increase productivity. No matter the business, we’ve got you covered with industry-compliant,
            tailored solutions.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((item, idx) => (
            <div key={idx} className="industry-card">
              <div className="icon-wrapper">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
