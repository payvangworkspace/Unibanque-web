import React, { useState } from 'react';
import '../External CSS/ContactUs.css';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaUserTie,
} from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-container">

      <h1 className="contact-heading">Contact Us</h1>


      <div className="contact-layout">
        {/* Feedback Form */}
        <div className="feedback-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Contact Info & Team */}
        <div className="contact-info-section">
          <div className="connect-info">
            <h2>Head Office</h2>
            <p>
              <FaMapMarkerAlt className="icon" />
              Suite 4, Europe House, Packhorse Road,<br />
              Gerrard Cross, Buckinghamshire SL9 8BQ, UK
            </p>
            <p>
              <FaPhoneAlt className="icon" />
              +44 7700 098523
            </p>
            <p>
              <FaEnvelope className="icon" />
              <a href="mailto:info@unibanque.com">info@unibanque.com</a>
            </p>
            <p>
              <FaGlobe className="icon" />
              <a
                href="http://www.unibanque.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.unibanque.com
              </a>
            </p>
            <p><strong>SWIFT Code:</strong> UNBQGB22</p>
          </div>

          <div className="team-contact">
            <h2>Our Team</h2>
            <div className="contact-person">
              <p>
                <FaUserTie className="icon" /> <strong>Sam Gravel</strong><br />
                Chief Finance Officer<br />
                <a href="mailto:sam.gravel@unibanque.com">sam.gravel@unibanque.com</a>
              </p>
            </div>
            <div className="contact-person">
              <p>
                <FaUserTie className="icon" /> <strong>Laurent Fresson</strong><br />
                Trade Finance Officer<br />
                <a href="mailto:laurent.fresson@unibanque.com">laurent.fresson@unibanque.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

