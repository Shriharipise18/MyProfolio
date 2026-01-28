import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/portfolio';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A collection of my recent work and personal projects
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View GitHub repository"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View live demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
