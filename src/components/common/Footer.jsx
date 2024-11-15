import React from 'react';
import "../../assets/css/Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaFacebook, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

function Footer() {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-main">
      <div className="footer-content">
        <h3>Bawantha Kalind Pasqual</h3>
        <p>Full-Stack Developer | Passionate about creating innovative digital solutions.</p>
        
        <ul className="social-links">
          <li><a href="https://www.linkedin.com/in/bawanthapasqual" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
          <li><a href="https://github.com/BKPASQUAL" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
          <li><a href="mailto:bawanthapasqual@gmail.com"><FaEnvelope /></a></li>
          <li><a href="https://www.instagram.com/_.bk_14._" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
          <li><a href="https://web.facebook.com/bk.pasqual" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
          <li><a href="https://wa.me/+94770370370" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></li>
        </ul>
      </div>
      
      <div className="divider"></div> {/* Divider */}
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bawantha Kalind Pasqual. All rights reserved.</p>
        <div className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
        <span>Scroll to Top</span>
      </div>
      </div>

      {/* Scroll to top button */}
   
    </footer>
  );
}

export default Footer;
