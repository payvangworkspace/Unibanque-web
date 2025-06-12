import React, { useState, useEffect } from 'react';
import '../External CSS/Navbar.css';
import { FaChevronDown, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    document.title = 'Home';
  }, []);

  const navigate=useNavigate();


function redirectSubMenu(redirectLink){
  console.log()
  navigate(menuItems[0].links[redirectLink])
  

}


function redirectHome(){
  navigate("/")
}



  const menuItems = [
    { title: 'UniBanque', submenu: ['About Us', 'Mission, Vision and Values', 'Why Choose Us'], links:["/about-us","/mission-vision","/why-choose-us"] },
    { title: 'Services', submenu: [], link: '/services' },
    { title: 'Solutions', submenu: ['Industries', 'Finance', 'Capital Markets', 'Enterprise Technology', 'Manufacturing', 'Healthcare', 'Higher Education', 'Logistics'], link: '#' },
    { title: 'Careers', submenu: [], link: '/careers' },
    { title: 'Contact Us', submenu: [], link: '/contact' },
  ];

  return (
    <motion.nav 
      className="navbar enhanced-navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-left">
        <motion.img
          src="/unibanque-logo.png"
          alt="UniBanque Logo"
          className="navbar-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }} onClick={()=>{redirectHome()}}
        />
      </div>

      <ul className="navbar-menu">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="navbar-item"
            onMouseEnter={() => item.submenu.length && setActiveMenu(idx)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {item.submenu.length > 0 ? (
              <span className="navbar-link">
                {item.title} <FaChevronDown className="dropdown-icon" />
              </span>
            ) : (
              <a href={item.link} className="navbar-link direct-link">{item.title}</a>
            )}

            <AnimatePresence>
              {item.submenu.length > 0 && activeMenu === idx && (
                <motion.ul
                  className="dropdown-menu show"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {item.submenu.map((option, subIdx) => (
                    <li key={subIdx} className="dropdown-item" onClick={()=>{redirectSubMenu(subIdx)}}>{option}</li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>

      <motion.div
        className="navbar-right"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="contact-info">
          <motion.span
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaPhoneAlt className="icon" /> +1 (800) 123-4567
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaEnvelope className="icon" /> support@unibanque.com
          </motion.span>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
