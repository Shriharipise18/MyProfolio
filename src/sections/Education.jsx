import React from 'react';
import { FiAward, FiCheck } from 'react-icons/fi';
import { education } from '../data/portfolio';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic background and certifications
        </p>

        <div className="timeline">
          {education.map((item, index) => (
            <div 
              key={item.id} 
              className="timeline-item fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">
                  <FiAward size={20} />
                </div>
                {index !== education.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-content card">
                <div className="education-header">
                  <div>
                    <h3 className="education-degree">{item.degree}</h3>
                    <p className="education-institution">{item.institution}</p>
                  </div>
                  <span className="education-year">{item.year}</span>
                </div>

                {item.achievements && item.achievements.length > 0 && (
                  <ul className="education-achievements">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="achievement-item">
                        <FiCheck className="achievement-icon" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
