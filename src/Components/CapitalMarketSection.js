import React from 'react';
import Card from './Card';
import '../External CSS/CapitalMarketSection.css';

import { FaExchangeAlt, FaBalanceScale, FaSearchDollar } from 'react-icons/fa';

const capitalMarketsSolutions = [
  {
    title: 'Trading Infrastructure',
    description: 'Low-latency platforms for equities and derivatives.',
    details: [
      'Market data integration.',
      'Risk engines for real-time limits.',
      'Smart order routing systems.'
    ],
    icon: <FaExchangeAlt className="icon" />
  },
  {
    title: 'RegTech & Compliance',
    description: 'AI-powered tools to manage regulations.',
    details: [
      'Trade surveillance and audit trails.',
      'Automated reporting workflows.',
      'AML and fraud analytics.'
    ],
    icon: <FaBalanceScale className="icon" />
  },
  {
    title: 'Fund Services',
    description: 'Tech-enabled fund admin and investor ops.',
    details: [
      'NAV calculation automation.',
      'Secure investor portals.',
      'Fee and performance benchmarking.'
    ],
    icon: <FaSearchDollar className="icon" />
  }
];

export default function CapitalMarketsSection() {
  return (
    <section>
      <h2>Capital Markets Solutions</h2>
      <div className="card-grid">
        {capitalMarketsSolutions.map((item, i) => (
          <Card key={i} title={item.title} description={item.description} details={item.details} icon={item.icon} />
        ))}
      </div>
    </section>
  );
}
