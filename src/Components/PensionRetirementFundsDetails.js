import React from 'react';
import '../External CSS//PensionRetirementFundsDetails.css';

const PensionRetirementFundsDetails = () => {
  return (
    <div className="prf-container">
      <h1 className="prf-title">Pension & Retirement Funds</h1>

      <section className="prf-section">
        <h2>Secure Your Future with Confidence</h2>
        <p>
          Our Pension & Retirement Fund services are designed to provide financial security post-retirement by ensuring consistent income streams, robust planning, and compliant fund structures.
        </p>
        <p>
          We assist organizations and individuals in setting up and managing retirement funds that meet regulatory standards while aligning with their long-term financial goals.
        </p>
      </section>

      <section className="prf-section">
        <h2>Key Services Offered</h2>
        <ul className="prf-list">
          <li>Design & Setup of Pension Schemes</li>
          <li>Fund Management & Investment Advisory</li>
          <li>Regulatory Compliance & Governance</li>
          <li>Retirement Income Planning</li>
          <li>Defined Contribution / Defined Benefit Plans</li>
          <li>End-to-End Support from Setup to Payout</li>
        </ul>
      </section>
    </div>
  );
};

export default PensionRetirementFundsDetails;
