import React from 'react';
import { about } from '../data/portfolio';
import '../styles/About.css';

const About = () => {
 const skillCategories = [
  {
    title: "Languages",
    skills: about.skills.languages,
    color: "#0d6efd", // blue
  },
  {
    title: "Frontend",
    skills: about.skills.frontend,
    color: "#6610f2", // indigo
  },
  {
    title: "Backend",
    skills: about.skills.backend,
    color: "#198754", // green
  },
  {
    title: "Databases",
    skills: about.skills.database,
    color: "#dc3545", // red
  },
  {
    title: "Data Analytics",
    skills: about.skills.dataAnalytics,
    color: "#20c997", // teal
  },
  {
    title: "Tools",
    skills: about.skills.tools,
    color: "#fd7e14", // orange
  },
  {
    title: "Coursework",
    skills: about.skills.coursework,
    color: "#6f42c1", // purple
  },
  {
    title: "Competitive Programming",
    skills: about.skills.competitiveProgramming,
    color: "#0dcaf0", // cyan
  },
];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know more about my background, skills, and expertise
        </p>

        <div className="about-content">
          {/* Professional Summary */}
          <div className="about-summary card fade-in">
            <h3 className="about-summary-title">Professional Summary</h3>
            <p className="about-summary-text">{about.summary}</p>
          </div>

          {/* Skills Grid */}
          <div className="skills-container">
            <h3 className="skills-main-title">Technical Skills</h3>
            <div className="skills-grid">
              {skillCategories.map((category, index) => (
                <div 
                  key={category.title} 
                  className="skill-category card fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-category-header">
                    <div 
                      className="skill-icon" 
                      style={{ backgroundColor: `${category.color}15`, color: category.color }}
                    >
                      <div className="skill-icon-dot"></div>
                    </div>
                    <h4 className="skill-category-title">{category.title}</h4>
                  </div>
                  <div className="skill-tags">
                    {category.skills.map(skill => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
