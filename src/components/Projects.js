import React from 'react';
import '../styles/Projects.css';
import '../styles/ScrollAnimation.css';
import ScrollAnimation from '../utils/ScrollAnimation';

const Projects = () => {
  const projects = [
    {
      title: 'GanarPro',
      description: 'A comprehensive construction project management tool that streamlines project tracking, resource allocation, and team collaboration.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['Django', 'React', 'PostgreSQL', 'AWS'],
      contributions: 'Led the development of the project management module and implemented real-time collaboration features.',
      impact: 'Reduced project completion time by 30% and improved team communication efficiency.',
      link: 'https://github.com/yourusername/ganarpro'
    },
    {
      title: 'MovSentry',
      description: 'A phishing email training platform that helps organizations educate their employees about cybersecurity threats.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['Ruby on Rails', 'React', 'MongoDB', 'Heroku'],
      contributions: 'Developed the email simulation engine and implemented the training dashboard.',
      impact: 'Reduced successful phishing attempts by 75% across client organizations.',
      link: 'https://github.com/yourusername/movsentry'
    },
    {
      title: 'CraftPositions',
      description: 'An online job opportunity platform connecting skilled craftsmen with potential employers.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['Django', 'React', 'PostgreSQL', 'AWS'],
      contributions: 'Built the job matching algorithm and implemented the user profile system.',
      impact: 'Facilitated over 500 successful job matches in the first year of operation.',
      link: 'https://github.com/yourusername/craftpositions'
    },
    {
      title: 'Express Subscription Manager',
      description: 'A Shopify subscription management system that automates recurring payments and order processing.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'Heroku'],
      contributions: 'Developed the subscription management module and payment processing system.',
      impact: 'Increased subscription retention by 40% for client stores.',
      link: 'https://github.com/yourusername/express-subscription'
    },
    {
      title: 'Supplier Sync Application',
      description: 'A dropshipping inventory synchronization tool that automates product updates across multiple platforms.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['Django', 'React', 'MongoDB', 'AWS'],
      contributions: 'Created the inventory synchronization engine and API integration system.',
      impact: 'Reduced manual inventory updates by 90% and improved order accuracy.',
      link: 'https://github.com/yourusername/supplier-sync'
    },
    {
      title: 'La Beau POS Dashboard',
      description: 'A comprehensive shop management system for beauty salons and spas.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'Heroku'],
      contributions: 'Developed the appointment scheduling system and inventory management module.',
      impact: 'Increased operational efficiency by 50% and improved customer satisfaction.',
      link: 'https://github.com/yourusername/la-beau-pos'
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
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-contributions">
                    <h4>Contributions</h4>
                    <p>{project.contributions}</p>
                  </div>
                  <div className="project-impact">
                    <h4>Impact</h4>
                    <p>{project.impact}</p>
                  </div>
                  <div className="project-links">
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </div>
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