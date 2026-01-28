import React, { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolio';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual backend call)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const socialLinks = [
    { 
      icon: <FiMail size={24} />, 
      label: 'Email', 
      href: `mailto:${personalInfo.email}`,
      value: personalInfo.email
    },
    { 
      icon: <FiLinkedin size={24} />, 
      label: 'LinkedIn', 
      href: personalInfo.linkedin,
      value: 'LinkedIn Profile'
    },
    { 
      icon: <FiGithub size={24} />, 
      label: 'GitHub', 
      href: personalInfo.github,
      value: 'GitHub Profile'
    },
    { 
      icon: <SiLeetcode size={24} />, 
      label: 'LeetCode', 
      href: personalInfo.leetcode,
      value: 'LeetCode Profile'
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Feel free to reach out for collaborations or just a friendly chat
        </p>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-container card fade-in">
            <h3 className="form-title">Send Me a Message</h3>
            
            {submitSuccess && (
              <div className="success-message">
                <FiCheck className="success-icon" />
                <p>Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="Your full name"
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                  placeholder="Your message here..."
                  rows="6"
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner-sm"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="info-title">Connect With Me</h3>
            <p className="info-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="social-icon">
                    {link.icon}
                  </div>
                  <div className="social-content">
                    <div className="social-label">{link.label}</div>
                    <div className="social-value">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
