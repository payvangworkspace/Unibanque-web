import React, { useEffect } from "react";
import "../External CSS/StatsSection.css";
import { FaUsers, FaTrophy, FaGlobe } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Define stats data
const stats = [
  { icon: <FaUsers />, label: "Employees", value: 56 },
  { icon: <FaTrophy />, label: "Awards", value: 26 },
  { icon: <FaGlobe />, label: "Cases Completed", value: 1243 },
];

// Subcomponent for individual stat
const StatCard = ({ icon, label, value }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="stat-card" ref={ref} data-aos="zoom-in">
      <div className="icon">{icon}</div>
      <h3>
        {inView ? <CountUp end={value} duration={2} separator="," /> : 0}
      </h3>
      <p>{label}</p>
    </div>
  );
};

const StatsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-heading" data-aos="fade-down">
        <h2>Providing services for 15 years with trust</h2>
        <p>Committed to Your Success</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
