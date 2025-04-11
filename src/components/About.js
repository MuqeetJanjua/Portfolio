import React from 'react';
import '../styles/About.css';
import '../styles/ScrollAnimation.css';
import ScrollAnimation from '../utils/ScrollAnimation';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <ScrollAnimation className="fade-down">
          <h2 className="section-title">About Me</h2>
        </ScrollAnimation>
        <div className="about-content">
          <ScrollAnimation className="fade-left">
            <div className="about-text">
              <p className="about-intro">
                I am a passionate full-stack developer with expertise in both Python/Django and Ruby on Rails ecosystems. 
                With a strong foundation in web development and a keen eye for detail, I specialize in building robust, 
                scalable applications that solve real-world problems.
              </p>
              <div className="about-highlights">
                <div className="highlight-item stagger-1">
                  <div className="highlight-icon">🚀</div>
                  <h3>Full-Stack Expertise</h3>
                  <p>Proficient in both frontend and backend development, with a focus on creating seamless user experiences.</p>
                </div>
                <div className="highlight-item stagger-2">
                  <div className="highlight-icon">💡</div>
                  <h3>Problem Solver</h3>
                  <p>Skilled at analyzing complex problems and implementing efficient, scalable solutions.</p>
                </div>
                <div className="highlight-item stagger-3">
                  <div className="highlight-icon">🤝</div>
                  <h3>Team Player</h3>
                  <p>Experienced in collaborating with cross-functional teams and contributing to successful project outcomes.</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation className="fade-right">
            <div className="about-skills">
              <h3 className="skills-title">Technical Skills</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">Tailwind</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Backend</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Django</span>
                    <span className="skill-tag">Ruby on Rails</span>
                    <span className="skill-tag">Node.js</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Database</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">PostgreSQL</span>
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">Redis</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>DevOps</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">AWS</span>
                    <span className="skill-tag">Docker</span>
                    <span className="skill-tag">CI/CD</span>
                    <span className="skill-tag">Git</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About; 