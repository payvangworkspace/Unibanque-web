import React, { useState, useEffect } from "react";
import "../External CSS/ContactUs.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaUserTie,
} from "react-icons/fa";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out. We’ll get back to you shortly.",
      icon: "success",
      confirmButtonColor: "#0074b7",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="contact-wrapper">
      <h1 className="contact-heading" data-aos="fade-up">Contact Us</h1>
      <p className="contact-subheading" data-aos="fade-up" data-aos-delay="100">
        We'd love to hear from you. Reach out with questions, feedback, or partnership ideas.
      </p>

      <div className="contact-layout">
        <div className="feedback-form" data-aos="fade-right">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-info-section" data-aos="fade-left">
          <div className="connect-info">
            <h2>Head Office</h2>
            <p><FaMapMarkerAlt className="icon" /> Suite 4, Europe House, Packhorse Road,<br />Gerrard Cross, SL9 8BQ, UK</p>
            <p><FaPhoneAlt className="icon" /> +44 7700 098523</p>
            <p><FaEnvelope className="icon" /> <a href="mailto:info@unibanque.com">info@unibanque.com</a></p>
            <p><FaGlobe className="icon" /> <a href="http://www.unibanque.com" target="_blank" rel="noreferrer">www.unibanque.com</a></p>
            <p><strong>SWIFT Code:</strong> UNBQGB22</p>
          </div>

          <div className="team-contact">
            <h2>Meet Our Team</h2>
            <div className="contact-person">
              <p><FaUserTie className="icon" /> <strong>Sam Gravel</strong><br />Chief Finance Officer<br /><a href="mailto:sam.gravel@unibanque.com">sam.gravel@unibanque.com</a></p>
            </div>
            <div className="contact-person">
              <p><FaUserTie className="icon" /> <strong>Laurent Fresson</strong><br />Trade Finance Officer<br /><a href="mailto:laurent.fresson@unibanque.com">laurent.fresson@unibanque.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;