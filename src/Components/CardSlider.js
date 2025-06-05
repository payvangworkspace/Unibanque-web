import React, { useRef, useEffect, useState } from "react";
import "../External CSS/CardSlider.css";
import {
  ShieldCheck,
  CreditCard,
  BarChart3,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Code,
} from "lucide-react";

const features = [
  {
    icon: <CreditCard size={32} />,
    title: "Financing",
    description:
      "Customised financing solutions form the basis of your success. We advise you from operating credit line to bond issue.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Risk Management",
    description:
      "Credit Foncier supports companies in managing risk with tailored hedging instruments.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Research",
    description:
      "Credit Foncier’s economic research regularly provides you with an excellent source of information for your decisions.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Financial Transactions",
    description:
      "With our innovative solutions for payment transactions and liquidity management, we ensure that your daily business runs smoothly.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Key Statistics",
    description:
      "Get access to real-time data and insights to make informed business decisions. View important stats and generate customizable settlement and reconciliation reports.",
  },
  {
    icon: <Code size={32} />,
    title: "Built for Developers",
    description:
      "Robust, clean, developer-friendly APIs, plugins, and libraries for all major languages and platforms, allowing you to focus on building great products.",
  },
];

const CardSlider = () => {
  const sliderRef = useRef(null);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const scrollSlider = (step) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  // Auto-slide logic with direction reversal
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          setDirection(-1); // Reverse to left
        } else if (scrollLeft <= 10) {
          setDirection(1); // Reverse to right
        }

        scrollSlider(350 * direction);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="card-slider-container">
      {/* <h2 className="card-slider-title">Our Valuable Features</h2> */}
      {/* <p className="card-slider-subtitle">
      We always strive to understand our customers' expectations and exceed them. By listening, innovating, and improving, we ensure seamless experiences and reliable solutions. Your satisfaction is our priority.
      </p> */}

      <div className="card-slider-wrapper" ref={sliderRef}>
        {features.map((feature, index) => (
          <div key={index} className="card">
            <div className="card-icon">{feature.icon}</div>
            <h3 className="card-title">{feature.title}</h3>
            <p className="card-description">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="nav-buttons-container">
        <button className="nav-button" onClick={() => scrollSlider(-350)}>
          <ChevronLeft size={26} />
        </button>
        <button className="nav-button" onClick={() => scrollSlider(350)}>
          <ChevronRight size={26} />
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
