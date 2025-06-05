import React from 'react';
import '../External CSS/HeroSection.css';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Empowering Financial Futures</h1>
          <p>Innovative banking solutions tailored for modern enterprises and individuals.</p>
          <div className="hero-buttons">
            <a href="/services" className="primary-btn">Explore Services</a>
            <a href="/contact" className="secondary-btn">Contact Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
