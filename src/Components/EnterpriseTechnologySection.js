import React from 'react';
import Card from './Card';
import '../External CSS/EnterpriseTechnologySection.css';

import { FaCloud, FaShieldAlt, FaCogs } from 'react-icons/fa';

const enterpriseTechSolutions = [
  {
    title: 'Cloud Modernization',
    description: 'Shift to scalable, cloud-native architecture.',
    details: [
      'Migration to AWS, Azure, GCP.',
      'Containerization with Docker/K8s.',
      'Serverless backend support.'
    ],
    icon: <FaCloud className="icon" />
  },
  {
    title: 'Cybersecurity',
    description: 'End-to-end enterprise-grade security solutions.',
    details: [
      'Zero Trust architecture.',
      'SIEM and threat intelligence.',
      'Data encryption & compliance.'
    ],
    icon: <FaShieldAlt className="icon" />
  },
  {
    title: 'Enterprise Automation',
    description: 'Automate workflows using AI and RPA.',
    details: [
      'Process orchestration with bots.',
      'Document and invoice automation.',
      'AI-enhanced decisioning.'
    ],
    icon: <FaCogs className="icon" />
  }
];

export default function EnterpriseTechnologySection() {
  return (
    <section>
      <h2>Enterprise Technology Solutions</h2>
      <div className="card-grid">
        {enterpriseTechSolutions.map((item, i) => (
          <Card key={i} title={item.title} description={item.description} details={item.details} icon={item.icon} />
        ))}
      </div>
    </section>
  );
}

