import React from 'react';
import '../External CSS/Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-left">
          <div className="logo">UNIBANQUE SA</div>
          <p>Swift Code: <strong>UNBQGB22</strong></p>
          <p>
            <FaMapMarkerAlt className="icon" /> Suite 4, Europe House, Packhorse Road,<br />
            Gerrard Cross, Buckinghamshire, SL9 8BQ, United Kingdom
          </p>
          <p className='phone-contact' onClick={() => (window.location.href = "tel:+447700098523")}><FaPhoneAlt className="icon"  /> +44 7700 098523</p>
          <p className='phone-contact' onClick={() => (window.location.href = "mailto:support@unibanque.com")}><FaEnvelope className="icon" /> info@unibanque.com</p>
        </div>

        <div className="footer-right">
          <p className="copyright">
            Copyright © 2022 UniBanque. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
