import React from 'react';
import '../styles/Contact.css';
import '../styles/ScrollAnimation.css';
import ScrollAnimation from '../utils/ScrollAnimation';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <ScrollAnimation className="fade-down">
          <h2 className="section-title">Get In Touch</h2>
        </ScrollAnimation>
        <div className="contact-content">
          <ScrollAnimation className="fade-left">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:your.email@example.com" className="contact-link">
                    your.email@example.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div className="contact-details">
                  <h3>LinkedIn</h3>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
                    linkedin.com/in/yourprofile
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🐙</div>
                <div className="contact-details">
                  <h3>GitHub</h3>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
                    github.com/yourusername
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation className="fade-right">
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Your message" rows="5"></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact; 