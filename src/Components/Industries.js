
import React from 'react';
import Card from './Card';
import '../External CSS/IndustriesSection.css';

const industrySolutions = [
  {
    title: 'Trade Finance',
    description: 'Streamlines international trade flows, enhances cash flow and processing efficiency.',
    details: [
      'Structured financing deals via lenders, banks, non-bank funders.',
      'Wide range of options: overdrafts, crowdfunding, alternative finance.',
      'Fast arrangement to support procurement-to-realization needs.'
    ]
  },
  {
    title: 'Corporate & Investment Banking',
    description: 'Tailored capital solutions, M&A advisory and strategic financing.',
    details: [
      'Equity & debt issuance support.',
      'Mergers, acquisitions and buy-side structuring.',
      'Access to diverse capital markets.'
    ]
  },
  {
    title: 'Strategic Advisory',
    description: 'Advisory services on growth, restructuring and strategic investments.',
    details: [
      'Long-term planning & corporate strategy.',
      'International expansion and cross-border setup.',
      'Regulatory, financial analysis and execution roadmap.'
    ]
  }
];

export default function IndustriesSection() {
  return (
    <section>
      <h2>Industries Solutions</h2>
      <div className="card-grid">
        {industrySolutions.map((sol, i) => (
          <Card key={i} title={sol.title} description={sol.description} details={sol.details} />
        ))}
      </div>
    </section>
  );
}
