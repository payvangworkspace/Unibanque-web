import React from 'react';
import '../External CSS//TradeFinanceDetails.css';

const TradeFinanceDetails = () => {
  return (
    <div className="tf-container">
      <h1 className="tf-title">Trade Finance</h1>

      <section className="tf-section">
        <h2>Empowering Global Trade</h2>
        <p>
          Our Trade Finance solutions simplify and secure international trade by providing financial instruments and advisory that facilitate transactions between exporters and importers.
        </p>
        <p>
          With our global expertise in cross-border finance, we offer tailored solutions that mitigate risk, improve liquidity, and streamline your trade operations.
        </p>
      </section>

      <section className="tf-section">
        <h2>Our Trade Finance Services</h2>
        <ul className="tf-list">
          <li>Letters of Credit (LCs)</li>
          <li>Bank Guarantees</li>
          <li>Documentary Collections</li>
          <li>Supply Chain Financing</li>
          <li>Foreign Exchange Advisory</li>
          <li>Import & Export Financing</li>
        </ul>
      </section>
    </div>
  );
};

export default TradeFinanceDetails;
