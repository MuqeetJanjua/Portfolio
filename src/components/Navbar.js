import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const startPosition = window.pageYOffset;
      const targetPosition = element.getBoundingClientRect().top + startPosition - navbarHeight;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 second
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + (distance * easedProgress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')}>MA</a>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
          <a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
        </div>

        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 