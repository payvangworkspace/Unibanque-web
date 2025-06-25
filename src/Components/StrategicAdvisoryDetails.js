import React from 'react';
import '../External CSS//StrategicAdvisoryDetails.css';

const StrategicAdvisoryDetails = () => {
  return (
    <div className="sa-container">
      <h1 className="sa-title">Strategic Advisory</h1>

      <section className="sa-section">
        <h2>Expert Guidance for Strategic Growth</h2>
        <p>
          Our Strategic Advisory services provide expert insights for mergers and acquisitions, capital raising,
          and corporate restructuring. With deep sector expertise, we offer tailored recommendations that align
          with your company’s long-term goals.
        </p>
        <p>
          Whether you're exploring expansion, divestment, or capital strategy, our professionals help
          identify opportunities and navigate complex negotiations.
        </p>
      </section>

      <section className="sa-section">
        <h2>Our Strategic Advisory Capabilities</h2>
        <ul className="sa-list">
          <li>Mergers and Acquisitions (M&A)</li>
          <li>Equity Capital Markets (ECM)</li>
          <li>Debt Advisory & Restructuring</li>
          <li>Valuation & Due Diligence Support</li>
          <li>Strategic Partnerships & Joint Ventures</li>
          <li>Sector-Specific Investment Strategy</li>
        </ul>
      </section>
    </div>
  );
};

export default StrategicAdvisoryDetails;
