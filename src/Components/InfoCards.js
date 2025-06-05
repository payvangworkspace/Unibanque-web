import React from "react";
import "../External CSS/InfoCards.css";

const cardData = [
  {
    image: "./c4.jpg",
    title: "About Unibanque",
    description:
      "Our main objective is, and will continue to be, to offer clients of our private bank services and solutions of the highest quality.",
    linkText: "Read More",
  },
  {
    image: "./c5.jpg",
    title: "Request a free consultation",
    description:
      "Our officers will answer all your questions, and help you determine which options make the most sense for you.",
    linkText: "Read More",
  },
  {
    image: "./c6.jpg",
    title: "Financial tips for beginner",
    description:
      "Financial Planning tips which will help these investors to give their financial life a kick start.",
    linkText: "Read More",
  },
];

const InfoCards = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div className="info-card" key={index}>
          <img src={card.image} alt={card.title} />
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href="#!" className="read-more">
              {card.linkText} &rarr;
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
