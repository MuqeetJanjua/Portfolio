import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p>&copy; {currentYear} Muqeet Janjua. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/MuqeetJanjua" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/muqeet-ahmad-523650214/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:muqeetahmad25@gmail.com">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 