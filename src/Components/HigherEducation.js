import React from 'react';
import '../External CSS/HigherEducation.css';
import { FaUniversity, FaChalkboardTeacher, FaGraduationCap, FaArrowRight } from 'react-icons/fa';

const HigherEducation = () => {
  return (
    <section className="higher-education-section">
      <div className="higher-education-wrapper">
        <div className="higher-education-header">
          <h2>Shaping the Future of Higher Education</h2>
          <p>
            UniBanque empowers universities and institutions with tailored financial tools and digital innovations to drive academic excellence, infrastructure growth, and student-centric advancements.
          </p>
        </div>

        <div className="higher-education-grid">
          <div className="higher-education-card">
            <div className="higher-education-icon"><FaUniversity /></div>
            <h3>Smart Campus Development</h3>
            <p>
              Partnering with universities to fund modern campuses equipped with AI-powered learning, smart facilities, and sustainable energy solutions.
            </p>
              <button className="learn-more-btn">Know More <FaArrowRight className="btn-icon" /></button>
          </div>

          <div className="higher-education-card">
            <div className="higher-education-icon"><FaChalkboardTeacher /></div>
            <h3>Faculty & Research Growth</h3>
            <p>
              Providing strategic support for faculty development, grants, and innovation-driven research to advance knowledge and global impact.
            </p>
              <button className="learn-more-btn">Know More <FaArrowRight className="btn-icon" /></button>
          </div>

          <div className="higher-education-card">
            <div className="higher-education-icon"><FaGraduationCap /></div>
            <h3>Student Experience Enhancement</h3>
            <p>
              Enhancing the student journey with financial tools, scholarships, ed-tech partnerships, and personalized learning ecosystems.
            </p>
              <button className="learn-more-btn">Know More <FaArrowRight className="btn-icon" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HigherEducation;
