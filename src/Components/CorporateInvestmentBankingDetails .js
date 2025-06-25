import React from 'react';
import '../External CSS//CorporateInvestmentBankingDetails.css';

const CorporateInvestmentBankingDetails = () => {
  return (
    <div className="cib-container">
      <h1 className="cib-title">Corporate & Investment Banking</h1>

      <section className="cib-section">
        <h2>Comprehensive Financial Solutions</h2>
        <p>
          Our Corporate & Investment Banking division offers a full suite of financial services tailored to corporations, governments, and institutions. We deliver insightful advice, powerful execution, and world-class financial products.
        </p>
        <p>
          We act as a strategic partner to help clients navigate complex financial markets and capitalize on growth opportunities through mergers, debt/equity funding, and structured finance solutions.
        </p>
      </section>

      <section className="cib-section">
        <h2>Our Services Include</h2>
        <ul className="cib-list">
          <li>Debt & Equity Capital Markets</li>
          <li>Project & Infrastructure Finance</li>
          <li>Merger & Acquisition Advisory</li>
          <li>Risk Management & Hedging Solutions</li>
          <li>Syndicated Loans & Structured Finance</li>
          <li>Cash Management & Treasury Services</li>
        </ul>
      </section>
    </div>
  );
};

export default CorporateInvestmentBankingDetails;
