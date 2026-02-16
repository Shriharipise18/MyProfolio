import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolio';
import '../styles/Contact.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState(null);

  // REPLACE THIS WITH YOUR ACTUAL FORMSPREE FORM ID
  // Example: "f/xyzkqwer" (get from https://formspree.io)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ID";

  const onSubmit = async (data) => {
    try {
      setServerError(null);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        const errorData = await response.json();
        // If it's a 404, it likely means the user hasn't set up their ID yet
        if (response.status === 404) {
          throw new Error("Form ID not found. Please create a form at formspree.io and update the ID in the code.");
        }
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (error) {
      console.error('Submission error:', error);
      setServerError(error.message || "Something went wrong. Please try again later.");
    }
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

            {serverError && (
              <div className="error-message" style={{
                backgroundColor: '#fee2e2',
                color: '#b91c1c',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <FiAlertCircle />
                <p>{serverError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="Your full name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className="error-text">{errors.name.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="your.email@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please enter a valid email address"
                    }
                  })}
                />
                {errors.email && <span className="error-text">{errors.email.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                  placeholder="Your message here..."
                  rows="6"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters"
                    }
                  })}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message.message}</span>}
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
