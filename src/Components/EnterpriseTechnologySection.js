import React from 'react';
import { FaArrowRight, FaCloud, FaShieldAlt, FaCogs } from 'react-icons/fa';
import '../External CSS/EnterpriseTechnologySection.css';

const enterpriseTechSolutions = [
  {
    title: 'Cloud Modernization',
    description: 'Migrate to scalable, resilient cloud-native environments using serverless, containers, and hybrid cloud.',
    icon: <FaCloud />,
  },
  {
    title: 'Cybersecurity',
    description: 'Protect enterprise infrastructure with Zero Trust models, threat analytics, and full-stack encryption.',
    icon: <FaShieldAlt />,
  },
  {
    title: 'Enterprise Automation',
    description: 'Deploy intelligent bots and AI tools to automate workflows, process documents, and scale decision-making.',
    icon: <FaCogs />,
  }
];

const EnterpriseTechnologySection = () => {
  return (
    <section className="enterprise-section">
      <div className="enterprise-wrapper">
        <div className="enterprise-header">
          <h2>Enterprise Technology Solutions</h2>
          <p>
            Empower your enterprise with cutting-edge technologies that accelerate transformation, strengthen security,
            and streamline operations across the digital landscape.
          </p>
        </div>

        <div className="enterprise-grid">
          {enterpriseTechSolutions.map((item, index) => (
            <div className="enterprise-card" key={index}>
              <div className="enterprise-icon">{item.icon}</div>
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

export default EnterpriseTechnologySection;
