import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolio';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <FiGithub size={20} />, 
      href: personalInfo.github,
      label: 'GitHub'
    },
    { 
      icon: <FiLinkedin size={20} />, 
      href: personalInfo.linkedin,
      label: 'LinkedIn'
    },
    { 
      icon: <SiLeetcode size={20} />, 
      href: personalInfo.leetcode,
      label: 'LeetCode'
    },
    { 
      icon: <FiMail size={20} />, 
      href: `mailto:${personalInfo.email}`,
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Footer Top */}
          <div className="footer-top">
            <div className="footer-brand">
              <h3 className="footer-logo" onClick={scrollToTop}>
                {personalInfo.name}
              </h3>
              <p className="footer-tagline">
                {personalInfo.role}
              </p>
            </div>

            <div className="footer-social">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="footer-made-with">
              Made with <FiHeart className="heart-icon" /> using React & Plain CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
