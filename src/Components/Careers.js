import React, { useState } from 'react';
import '../External CSS/Careers.css';
import Swal from 'sweetalert2';


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
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setSelectedJob(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     Swal.fire({
    icon: 'success',
    title: 'Application Submitted!',
    text: `Thank you for applying for the ${selectedJob.title} role.`,
    confirmButtonColor: '#0077b6'
  });

  handleClose();
  };

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
              <button className="apply-btn" onClick={() => handleApplyClick(job)}>Apply Now</button>
            </div>
          ))}
        </div>

        {/* Modal Form */}
        {showForm && selectedJob && (
          <div className="modal-overlay">
            <div className="apply-form">
              <button className="close-btn" onClick={handleClose}>×</button>
              <h3>Apply for: {selectedJob.title}</h3>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />
                <textarea placeholder="Why are you a good fit?" rows="4" required></textarea>
                <input type="file" accept=".pdf,.doc,.docx" required />
                <button type="submit">Submit Application</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Careers;
