import React from 'react';
import '../External CSS//CustomSolutionsDetails.css';

const CustomSolutionsDetails = () => {
  return (
    <div className="cs-container">
      <h1 className="cs-title">Custom Solutions</h1>
      
      <section className="cs-section">
        <h2>Tailor-made Solutions for Unique Needs</h2>
        <p>
          At UNIBANQUE Wealth Management, we leverage the full strength of our Bank’s resources to craft 
          and deliver tailor-made financial solutions for a diverse range of clients.
        </p>
        <p>
          Whether collaborating with our internal finance department to design a unique financial structure, 
          partnering with external consultants to establish family trusts, or utilizing the deep expertise of 
          our Foreign Exchange teams, we consistently strive to develop innovative, personalized strategies.
        </p>
      </section>

      <section className="cs-section">
        <h2>Personalized Wealth Management</h2>
        <p>
          Our private bankers work closely with you to deliver a wealth management experience tailored 
          specifically to your goals. By tapping into all our internal and external resources, we ensure 
          that the solution delivered is best-in-class and aligned with your financial vision.
        </p>
      </section>

      <section className="cs-section">
        <h2>Institutional Investment Solutions</h2>
        <p>
          For clients whose financial profiles and asset structures align more with institutional needs, 
          we offer a specialized wealth management service. This integrates the Investment division’s 
          institutional-grade solutions to provide a more comprehensive and robust offering.
        </p>
      </section>
    </div>
  );
};

export default CustomSolutionsDetails;