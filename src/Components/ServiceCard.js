import React from 'react';
import '../External CSS//ServiceCard.css';

const ServiceCard = ({ title, description, icon, link }) => (
  <div className="service-card">
    {icon && <img src={icon} alt={`${title} icon`} className="service-card__icon" />}
    <h3 className="service-card__title">{title}</h3>
    <p className="service-card__desc">{description}</p>
    {link && <a href={link} className="service-card__link">Learn More →</a>}
  </div>
);

export default ServiceCard;


