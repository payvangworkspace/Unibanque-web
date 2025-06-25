import React from 'react';
import { FaArrowRight, FaCreditCard, FaChartLine, FaPiggyBank } from 'react-icons/fa';
import '../External CSS/FinanceSection.css';

const financeSolutions = [
  {
    title: 'Retail Banking',
    description: 'We fund omnichannel, real-time and AI-powered digital banking systems that personalize financial experiences.',
    icon: <FaCreditCard />,
  },
  {
    title: 'Wealth Management',
    description: 'Modern investment advisory with robo-advisors, secure portals, and real-time compliance tracking.',
    icon: <FaChartLine />,
  },
  {
    title: 'Microfinance Solutions',
    description: 'Tech-driven loan lifecycle automation and KYC tools to support underserved communities and SMEs.',
    icon: <FaPiggyBank />,
  }
];

const FinanceSection = () => {
  return (
    <section className="finance-section">
      <div className="finance-wrapper">
        <div className="finance-header">
          <h2>Transforming Finance Through Smart Technology</h2>
          <p>
            At UniBanque, we empower banks, wealth firms, and financial startups with intelligent infrastructure, automation tools, and a digital-first mindset.
          </p>
        </div>

        <div className="finance-grid">
          {financeSolutions.map((item, index) => (
            <div className="finance-card" key={index}>
              <div className="finance-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="learn-more-btn">Know More <FaArrowRight className="btn-icon" /></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinanceSection;
