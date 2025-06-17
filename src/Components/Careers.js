import React from 'react';
import '../External CSS/Careers.css';

const jobOpenings = [
  {
    title: "Frontend Developer",
    description: "We are looking for a React developer with 2+ years of experience building responsive user interfaces.",
    location: "Remote / London, UK",
    image: "./c2.jpg"
  },
  {
    title: "Backend Engineer",
    description: "Looking for a Java/Spring Boot expert to manage backend systems and integrate APIs for our platform.",
    location: "Remote / Germany",
    image: "./c5.jpg"
  },
  {
    title: "UI/UX Designer",
    description: "Creative designer needed to craft user-centric experiences and visual design for web and mobile applications.",
    location: "Remote / India",
    image: "./c6.jpg"
  }
];

const Careers = () => {
  return (
    <section className="careers-section">
      <div className="careers-container">
        <h2 className="careers-title">Join Our Team</h2>
        <p className="careers-subtitle">Explore exciting career opportunities with us.</p>
        <div className="careers-grid">
          {jobOpenings.map((job, index) => (
            <div className="career-card" key={index}>
              <img src={job.image} alt={job.title} className="job-image" />
              <h3 className="job-title">{job.title}</h3>
              <p className="job-description">{job.description}</p>
              <p className="job-location"><strong>Location:</strong> {job.location}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
