import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../External CSS/InnovationSection.css';

const InnovationSection = () => {
  const cards = [
    {
      img: './c1.jpeg',
      title: 'Our Services',
      subtitle: 'Trade Finance'
    },
    {
      img: './c2.jpg',
      title: 'Our Expertise',
      subtitle: 'Corporate & Investment Banking'
    },
    {
      img: './c3.jpg',
      title: 'Our Solutions',
      subtitle: 'Financial Planning'
    }
  ];

  return (
    <section className="innovation-section">
      <div className="top-content">
        <div className="headline">
          <h5>UNIBANQUE</h5>
          <h2>"Innovating Financial Solutions with Trust"</h2>
        </div>
        <p className="description">
          At UniBanque, we are dedicated to providing innovative and structured financial solutions that cater to the diverse needs of our clients. Our commitment to trust, agility, and expertise ensures that we support our clients in navigating the evolving financial landscape.
        </p>
      </div>

      <div className="innovation-card-section">
        {cards.map((card, idx) => (
          <div className="innovation-card" key={idx}>
            <img src={card.img} alt={card.subtitle} />
            <div className="innovation-card-content">
              <div className="innovation-card-text">
                <h4 className="innovation-card-title">{card.title}</h4>
                <h3 className="innovation-card-subtitle">{card.subtitle}</h3>
              </div>
              <div className="innovation-card-hover-footer">
                <span>Learn More</span>
                <FaArrowRight className="hover-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="footer-text">
        Experience the UniBanque difference: Innovative solutions grounded in trust.{' '}
        <a href="https://www.unibanque.com/about-us/" className="explore-link">Learn more about us</a>
      </p>
    </section>
  );
};

export default InnovationSection;
