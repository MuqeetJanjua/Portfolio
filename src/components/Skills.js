import React from 'react';
import '../styles/Skills.css';
import '../styles/ScrollAnimation.css';
import ScrollAnimation from '../utils/ScrollAnimation';

const Skills = () => {
  const skillsData = [
    { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'JavaScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'Ruby', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg' },
    { name: 'TypeScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
    { name: 'HTML5', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
    { name: 'React', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'Django', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg' },
    { name: 'Bootstrap', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg' },
    { name: 'FastAPI', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg' },
    { name: 'Flask', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg' },
    { name: 'GraphQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg' },
    { name: 'MaterialUI', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg' },
    { name: 'Redux', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' },
    { name: 'Rails', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg' },
    { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'Heroku', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg' },
    { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
    { name: 'GitHub', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
    { name: 'GitLab', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg' },
    { name: 'Bitbucket', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg' },
    { name: 'Git', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
    { name: 'Firebase', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg' },
    { name: 'Jira', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg' },
    { name: 'Trello', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/trello/trello-plain.svg' },
    { name: 'NPM', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg' },
    { name: 'Linux', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' },
    { name: 'VS Code', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg' },
    { name: 'PyCharm', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pycharm/pycharm-original.svg' },
    { name: 'Slack', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/slack/slack-original.svg' },
    { name: 'RubyMine', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rubymine/rubymine-original.svg' },
    { name: 'Postman', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg' },
    { name: 'MongoDB', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
    { name: 'Redis', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg' },
    { name: 'SQLite', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg' },
    { name: 'Google Analytics', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg' },
    { name: 'Google Search Console', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg' },
    { name: 'Elasticsearch', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original.svg' },
    { name: 'NumPy', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <ScrollAnimation className="fade-down">
          <h2 className="section-title">Skills & Technologies</h2>
        </ScrollAnimation>
        
        <div className="marquee-container">
          <div className="marquee">
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 