
import React from 'react';
import ServiceCard from './ServiceCard';
import '../External CSS//ServiceList.css';

const services = [
  {
    title: 'Trade Finance',
    description: 'Streamline international trade flows with structured finance & FX advisory.',
    icon: '/aboutus.jpg',
    link: '/services/trade-finance'
  },
  {
    title: 'Pension & Retirement Funds',
    description: 'Secure retirement planning from setup to first payout.',
    icon: '/c2.jpg',
    link: '/services/pension-retirement-funds'
  },
  {
    title: 'Corporate & Investment Banking',
    description: 'Comprehensive banking, markets & investor services.',
    icon: '/c3.jpg',
    link: '/services/corporate-investment-banking'
  },
  {
    title: 'Strategic Advisory',
    description: 'Mergers & Acquisitions, ECM backed by sector expertise.',
    icon: '/c4.jpg',
    link: '/services/strategic-advisory'
  },
  {
    title: 'Custom Solutions',
    description: 'Tailor‑made wealth management, FX, trusts, institutional solutions.',
    icon: '/c5.jpg',
    link: '/services/custom-solutions'
  },
  {
    title: 'Financial Planning',
    description: '6‑step strategy to align investments with your risk profile.',
    icon: '/c6.jpg',
    link: '/services/financial-planning'
  },
];

const ServicesList = () => (
  <section className="services-list">
    {services.map(s => (
      <ServiceCard key={s.title} {...s} />
    ))}
  </section>
);

export default ServicesList;
