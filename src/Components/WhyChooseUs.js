import React from 'react';
import { motion } from 'framer-motion';
import '../External CSS/WhyChooseUs.css';
import { FaLock, FaBolt, FaHandshake } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaLock />,
      title: 'Bank-Level Security',
      description: 'We implement advanced encryption and security protocols to keep your data safe.',
    },
    {
      icon: <FaBolt />,
      title: 'Fast Performance',
      description: 'Experience lightning-fast processing with our optimized financial technology stack.',
    },
    {
      icon: <FaHandshake />,
      title: 'Trusted by Clients',
      description: 'Global enterprises trust UniBanque for reliable and innovative banking solutions.',
    },
  ];

  return (
    <section className="why-choose-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Why Choose UniBanque</h2>
        <p>We deliver modern, secure, and scalable banking solutions tailored to your needs.</p>
      </motion.div>

      <div className="features-wrapper">
        {features.map((item, idx) => (
          <motion.div
            className="feature-card"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="icon-box"
              whileHover={{
                scale: [1, 1.3, 1],
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.6 },
              }}
            >
              {item.icon}
            </motion.div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
