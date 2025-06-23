import React from 'react';
import Card from './Card';
import '../External CSS/FinanceSection.css';

import { FaCreditCard, FaChartLine, FaPiggyBank } from 'react-icons/fa';

const financeSolutions = [
  {
    title: 'Retail Banking',
    description: 'Digital-first banking solutions for individuals.',
    details: [
      'Omnichannel experiences for customers.',
      'Real-time mobile banking apps.',
      'AI-driven personalization and analytics.'
    ],
    icon: <FaCreditCard className="icon" />
  },
  {
    title: 'Wealth Management',
    description: 'Automated advisory and investment tools.',
    details: [
      'Portfolio management with robo-advisors.',
      'Secure client portals with performance tracking.',
      'Compliance and risk monitoring.'
    ],
    icon: <FaChartLine className="icon" />
  },
  {
    title: 'Microfinance Solutions',
    description: 'Empowering underserved sectors with tech-driven lending.',
    details: [
      'Loan lifecycle automation.',
      'Mobile KYC & onboarding.',
      'Affordable credit solutions for SMEs.'
    ],
    icon: <FaPiggyBank className="icon" />
  }
];

export default function FinanceSection() {
  return (
    <section>
      <h2>Finance Solutions</h2>
      <div className="card-grid">
        {financeSolutions.map((item, i) => (
          <Card key={i} title={item.title} description={item.description} details={item.details} icon={item.icon} />
        ))}
      </div>
    </section>
  );
}