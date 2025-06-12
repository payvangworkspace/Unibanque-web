// AboutUs.jsx
import React from 'react';
import { FaUniversity, FaTools, FaUsers, FaGlobeAmericas, FaBalanceScale, FaHandshake } from 'react-icons/fa';
import '../External CSS/AboutUs.css';

const aboutSections = [
  {
    title: 'Our Story & Values',
    icon: <FaUniversity className="about-us-icon" />,
    content:
      'UNIBANQUE is a chartered, values-driven financial institution committed to integrity, loyalty, and excellence. We invest in sustainable development, future leaders, and cultural enrichment.',
  },
  {
    title: 'Our Skills',
    icon: <FaTools className="about-us-icon" />,
    content: [
      'Strategic Planning — 80%',
      'Investment Planning — 90%',
      'Loan Services — 80%',
      'Trade Finance — 100%',
      'Corporate Finance — 75%',
    ],
  },
  {
    title: 'How We Work',
    icon: <FaUsers className="about-us-icon" />,
    content:
      'We personalize financial strategies through detailed consultations, aligning resources to meet your goals with precision and professionalism.',
  },
  {
    title: 'Our Mission',
    icon: <FaGlobeAmericas className="about-us-icon" />,
    content:
      'Focused on sustainability, education, social investment, the arts, and volunteering—our mission goes beyond banking.',
  },
  {
    title: 'Compliance & Ethics',
    icon: <FaBalanceScale className="about-us-icon" />,
    content:
      'We adhere to strict regulatory standards and ethical practices, ensuring transparency, compliance, and trust in all our operations.',
  },
  {
    title: 'Client-Centric Approach',
    icon: <FaHandshake className="about-us-icon" />,
    content:
      'Our success is defined by our client relationships. We emphasize open communication, long-term partnerships, and personalized attention to every detail.',
  },
];

const AboutUs = () => (
  <section className="about-us-section">
    <div className="about-us-container">
      {/* <h2 className="about-us-title">About UNIBANQUE</h2> */}
      <div className="about-us-grid">
        {aboutSections.map((section, index) => (
          <div
            className="about-us-card"
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {section.icon}
            <h3 className="about-us-heading">{section.title}</h3>
            {Array.isArray(section.content) ? (
              <ul className="about-us-list">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="about-us-text">{section.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutUs;
