import React from 'react';
import '../External CSS/CallBackForm.css';
import { FaArrowRight } from 'react-icons/fa';

const CallBackForm = () => {
  return (
    <section className="callback-section">
      <div className="callback-container">
        <h2>Request A Call Back</h2>
        <p>We would be delighted to discuss our solutions, services and capabilities in more detail with you.</p>
        
        <form className="callback-form">
          <input type="text" placeholder="Your Name" required />
          
          <select required>
            <option value="" disabled selected>I Would Like To Discuss</option>
            <option value="services">Services</option>
            <option value="pricing">Pricing</option>
            <option value="support">Support</option>
          </select>

          <input type="tel" placeholder="Phone Number" required />

          <button type="submit">
            SUBMIT <FaArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallBackForm;
