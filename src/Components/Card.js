import React from 'react';
import "../External CSS/Card.css"

export default function Card({ title, description, details, icon, className = '', iconWrapperClass = '' }) {
  return (
    <div className={`card ${className}`}>
      {icon && <div className={iconWrapperClass}>{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {details.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}