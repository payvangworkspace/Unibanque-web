import React from 'react';
import { FaArrowRight, FaExchangeAlt, FaBalanceScale, FaSearchDollar } from 'react-icons/fa';
import '../External CSS/CapitalMarketSection.css';

const capitalMarketsSolutions = [
  {
    title: 'Trading Infrastructure',
    description: 'We build low-latency platforms for equities, derivatives, and smart routing of orders across global exchanges.',
    icon: <FaExchangeAlt />,
  },
  {
    title: 'RegTech & Compliance',
    description: 'AI-powered regulatory monitoring and automated compliance reporting for modern capital market institutions.',
    icon: <FaBalanceScale />,
  },
  {
    title: 'Fund Services',
    description: 'Streamlined NAV automation, investor portals, and benchmarking tools to power fund admin and investor ops.',
    icon: <FaSearchDollar />,
  }
];

const CapitalMarketsSection = () => {
  return (
    <section className="capital-section">
      <div className="capital-wrapper">
        <div className="capital-header">
          <h2>Innovative Capital Markets Solutions</h2>
          <p>
            From trading platforms to fund administration, our suite of technologies helps capital market players optimize operations,
            meet compliance needs, and unlock new efficiencies.
          </p>
        </div>

        <div className="capital-grid">
          {capitalMarketsSolutions.map((item, index) => (
            <div className="capital-card" key={index}>
              <div className="capital-icon">{item.icon}</div>
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

export default CapitalMarketsSection;
