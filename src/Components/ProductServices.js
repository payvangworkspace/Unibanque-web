

// ProductServices.jsx
import React from 'react';
import { FaDollarSign, FaShieldAlt, FaChartLine, FaExchangeAlt } from 'react-icons/fa';
import '../External CSS/ProductServices.css';
import CardSlider from './CardSlider';

const services = [
  {
    icon: <FaDollarSign className="icon" />,
    title: 'Financing',
    description: 'Customised financing solutions form the basis of your success. We advise you from operating credit line to bond issue.',
  },
  {
    icon: <FaShieldAlt className="icon" />,
    title: 'Risk Management',
    description: 'Credit Foncier supports companies in managing risk with tailored hedging instruments.',
  },
  {
    icon: <FaChartLine className="icon" />,
    title: 'Research',
    description: 'Credit Foncier’s economic research regularly provides you with an excellent source of information for your decisions.',
  },
  {
    icon: <FaExchangeAlt className="icon" />,
    title: 'Financial Transactions',
    description: 'With our innovative solutions for payment transactions and liquidity management, we ensure that your daily business runs smoothly.',
  },
];

const ProductServices = () => {
  return (
    <section className="product-services">
      <h2 className="heading">Solutions for the success of your business</h2>
      <div className="services-container">
        <CardSlider/>
      </div>
    </section>
  );
};

export default ProductServices;




