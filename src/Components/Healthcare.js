import React from 'react';
import { FaArrowRight, FaClinicMedical, FaUserNurse, FaVials } from 'react-icons/fa';
import '../External CSS/Healthcare.css';
import { useNavigate } from 'react-router-dom';

const Healthcare = () => {
const navigate=useNavigate();

function redirectContact(){

navigate("/contact")




}




  return (
    <section className="healthcare-section">
      <div className="healthcare-wrapper">
        <div className="healthcare-header">
          <h2>Strategic Financial Solutions for Healthcare Excellence</h2>
          <p>
            At UniBanque, we enable healthcare institutions and innovators to deliver superior care through smart financing,
            tailored advisory, and digital transformation support across the medical ecosystem.
          </p>
          
        </div>

        <div className="healthcare-grid">
          <div className="healthcare-card">
            <div className="healthcare-icon"><FaClinicMedical /></div>
            <h3>Modern Infrastructure</h3>
            <p>
              We fund the expansion and modernization of hospitals, clinics, and diagnostics centers with flexible, scalable capital solutions aligned with regulatory requirements.
            </p>
              <button className="learn-more-btn" onClick={redirectContact}>Know More <FaArrowRight className="btn-icon" /></button>
          </div>

          <div className="healthcare-card">
            <div className="healthcare-icon"><FaUserNurse /></div>
            <h3>Workforce Empowerment</h3>
            <p>
              Support for recruitment, payroll optimization, and training programs to help you maintain a high-performing medical workforce in a rapidly changing landscape.
            </p>
              <button className="learn-more-btn" onClick={redirectContact}>Know More <FaArrowRight className="btn-icon" /></button>
          </div>

          <div className="healthcare-card">
            <div className="healthcare-icon"><FaVials /></div>
            <h3>Medical Research & HealthTech</h3>
            <p>
              From biotech startups to pharmaceutical R&D, we provide capital and consultancy to fast-track innovation, compliance, and market access.
            </p>
              <button className="learn-more-btn" onClick={redirectContact}>Know More <FaArrowRight className="btn-icon" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Healthcare;
