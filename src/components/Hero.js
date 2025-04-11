import React, { useEffect, useRef, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setShowTyping(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const particles = [
    { type: 'small', count: 8 },
    { type: 'medium', count: 6 },
    { type: 'large', count: 4 },
    { type: 'glow', count: 2 }
  ];

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="background-gradient" />
      <div className="rotating-gradients" />
      <div className="particles">
        {particles.map(({ type, count }) => 
          [...Array(count)].map((_, i) => (
            <div key={`${type}-${i}`} className={`particle ${type}`} />
          ))
        )}
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">
            {showTyping && <span className="typing-text">Hi, I'm <span className="highlight">Muqeet Ahmad</span></span>}
          </span>
        </h1>
        <p className="hero-description">
          I build exceptional digital experiences with modern technologies.
          Specializing in Django, Ruby on Rails, and React development.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-btn primary">
            View My Work
          </a>
          <a href="#contact" className="hero-btn secondary">
            Contact Me
          </a>
        </div>
        <div className="hero-scroll">
          <span className="scroll-text">Scroll Down</span>
          <div className="scroll-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 