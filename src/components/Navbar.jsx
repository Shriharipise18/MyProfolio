import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'coding-profiles', label: 'Coding Profiles' },
    { id: 'contact', label: 'Contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">Hello</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="navbar-links desktop-only">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="navbar-actions">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>

            <button
              className="mobile-menu-btn mobile-only"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="mobile-nav-links">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
