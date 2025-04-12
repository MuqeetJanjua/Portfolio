import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import '../styles/ScrollAnimation.css';
import ScrollAnimation from '../utils/ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email
      };

      await emailjs.send(
        'service_mj32lpj',
        'template_gpct5sj',
        templateParams,
        'H_axnzhVirlhCYuAt'
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <h3 className='text-start'>Email</h3>
                  <a href="mailto:muqeetahmad25@gmail.com" className="contact-link">
                    muqeetahmad25@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div className="contact-details">
                  <h3 className='text-start'>LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/muqeet-ahmad-523650214/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    linkedin.com/in/muqeet-ahmad-523650214/
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🐙</div>
                <div className="contact-details">
                  <h3>GitHub</h3>
                  <a href="https://github.com/MuqeetJanjua/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    github.com/MuqeetJanjua/
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation className="fade-right">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                {submitStatus.message && (
                  <div className={`submit-status ${submitStatus.type}`}>
                    {submitStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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