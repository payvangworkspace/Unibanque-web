import React from 'react';
import '../External CSS//ServiceCard.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, link }) => (
  <div className="service-card">
    {icon && <img src={`${process.env.PUBLIC_URL}/${icon}`} alt={`${title} icon`} className="service-card__icon" />}
    <h3 className="service-card__title">{title}</h3>
    <p className="service-card__desc">{description}</p>
    {link && <Link to={link} className="service-card__link">Learn More →</Link>}
  </div>
);

export default ServiceCard;


