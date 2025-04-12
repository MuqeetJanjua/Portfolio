import React from 'react';
import '../styles/Projects.css';
import '../styles/ScrollAnimation.css';
import ScrollAnimation from '../utils/ScrollAnimation';

const Projects = () => {
  const projects = [
    {
      title: 'GanarPro',
      description: 'A comprehensive construction project management tool that streamlines project tracking, resource allocation, and team collaboration.',
      technologies: ['Django', 'React', 'PostgreSQL', 'AWS', 'PostHog', 'Heroku', 'Cloudinary'],
      stats: '30% reduction in project completion time',
      link: 'https://app.ganarpro.com/'
    },
    {
      title: 'MovSentry',
      description: 'A comprehensive cybersecurity training platform featuring phishing simulations, Outlook add-in, micro-training modules, and threat reporting system.',
      technologies: ['Django', 'React', 'PostgreSQL', 'PostHog', 'VPS Hosting', 'Cloudinary', 'Outlook Add-in', 'AWS SES', 'Redis', 'Celery'],
      stats: '75% reduction in phishing attempts, 50+ organizations, 10,000+ users',
      link: 'http://admin.movsentry.com/'
    },
    {
      title: 'CraftPositions',
      description: 'A comprehensive online job platform connecting skilled craftsmen with potential employers, featuring advanced search, real-time notifications, and a robust matching algorithm.',
      technologies: ['Django', 'React', 'PostgreSQL', 'AWS', 'Redis', 'Celery', 'Stripe', 'SendGrid'],
      stats: '500+ job matches, 60% faster hiring, 10,000+ users',
      link: 'https://craftpositions.com/'
    },
    {
      title: 'Express Subscription Manager',
      description: 'A Shopify subscription management system that automates recurring payments and order processing.',
      technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'Heroku'],
      stats: '40% increase in subscription retention',
      link: 'https://github.com/yourusername/express-subscription'
    },
    {
      title: 'Supplier Sync Application',
      description: 'A comprehensive dropshipping inventory synchronization tool that automates product updates, pricing adjustments, and stock management across multiple e-commerce platforms.',
      technologies: ['Ruby on Rails', 'React', 'MongoDB', 'AWS', 'Redis', 'Sidekiq', 'Shopify API'],
      stats: '90% reduction in manual updates, 50+ connected stores, 100,000+ products synced daily'
    },
    {
      title: 'La Beau POS Dashboard',
      description: 'A comprehensive shop management system for beauty salons and spas. Features appointment scheduling, inventory management, customer profiles, and sales analytics.',
      technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'Heroku'],
      stats: '50% increase in operational efficiency',
      link: 'https://labeaupos.com/'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <ScrollAnimation className="fade-down">
          <h2 className="section-title">Projects</h2>
        </ScrollAnimation>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} className={`fade-up stagger-${(index % 6) + 1}`}>
              <div className="project-card">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-stats">
                    <p>{project.stats}</p>
                  </div>
                  {project.link && (
                    <div className="project-links">
                      <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 