
import React from 'react';
import '../External CSS//FinancialPlanningDetails.css';

const FinancialPlanningDetails = () => {
  return (
    <div className="fp-container">
      <h1 className="fp-title">Financial Planning</h1>
      
      <section className="fp-section">
        <h2>The Need for Financial Planning</h2>
        <p>
          Based on the in-depth understanding of your financial situation, we recommend investment plans and solutions 
          to help you achieve financial objectives, in line with your willingness and ability to take risk.
        </p>
        <p>
          As you ascend newer highs in your life, your aspirations and needs grow proportionately. These ever-increasing 
          needs are further compounded by inflation, which depreciates the purchasing power of your hard-earned money.
        </p>
        <p>
          We define financial planning as a “process of developing strategies to help people manage their financial 
          affairs to meet life goals.” In creating their recommendations and plans, financial planners may review all 
          relevant aspects of a client’s situation across a breadth of financial planning activities, including 
          inter-relationships among often conflicting objectives.
        </p>
      </section>

      <section className="fp-section">
        <h2>Financial Planning in Six Steps</h2>
        <ol className="fp-steps">
          <li>Establish and define the relationship with the client.</li>
          <li>Collect the client’s information.</li>
          <li>Analyze and assess the client’s financial status.</li>
          <li>Develop the financial planning recommendations and present them to the client.</li>
          <li>Implement the client’s financial planning recommendations.</li>
          <li>Review the client’s situation.</li>
        </ol>
      </section>
    </div>
  );
};

export default FinancialPlanningDetails;
