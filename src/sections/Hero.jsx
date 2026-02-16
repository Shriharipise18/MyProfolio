// import React from 'react';
// import { FiArrowRight, FiDownload } from 'react-icons/fi';
// import { personalInfo } from '../data/portfolio';
// import '../styles/Hero.css';

// const Hero = () => {
//   const scrollToProjects = () => {
//     const element = document.getElementById('projects');
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const handleDownloadResume = () => {
//     // In a real scenario, this would download a PDF from the public folder
//     // For demo, we'll create a simple alert
//     alert('Resume download would start here. Place your resume.pdf in the /public folder.');
//     // Uncomment below for actual download
//     // const link = document.createElement('a');
//     // link.href = '/resume.pdf';
//     // link.download = 'John_Doe_Resume.pdf';
//     // link.click();
//   };

//   return (
//     <section id="home" className="hero-section">
//       <div className="container">
//         <div className="hero-content">
//           <div className="hero-text">
//             <div className="hero-greeting fade-in">
//               <span className="wave">👋</span> Hello, I'm
//             </div>
//             <h1 className="hero-name fade-in">{personalInfo.name}</h1>
//             <h2 className="hero-role fade-in">{personalInfo.role}</h2>
//             <p className="hero-tagline fade-in">
//               {personalInfo.tagline}
//             </p>

//             <div className="hero-buttons fade-in">
//               <button 
//                 className="btn btn-primary"
//                 onClick={scrollToProjects}
//               >
//                 View Projects
//                 <FiArrowRight className="btn-icon" />
//               </button>
//               <button 
//                 className="btn btn-secondary"
//                 onClick={handleDownloadResume}
//               >
//                 <FiDownload className="btn-icon" />
//                 Download Resume
//               </button>
//             </div>
//           </div>

//           <div className="hero-visual fade-in">
//             <div className="hero-circle-container">
//               <div className="hero-circle hero-circle-1"></div>
//               <div className="hero-circle hero-circle-2"></div>
//               <div className="hero-circle hero-circle-3"></div>
//               <div className="hero-avatar">
//                 <div className="avatar-content">
//                   <span className="avatar-initials">
//                     {personalInfo.name.split(' ').map(n => n[0]).join('')}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="scroll-indicator">
//         <div className="scroll-mouse">
//           <div className="scroll-wheel"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";
import "../styles/Hero.css";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Full-Stack Developer", "Data Analyst", "AI Engineer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* LEFT CONTENT */}
          <div className="hero-text">
            <div className="hero-greeting fade-in">
              <span className="wave">👋</span> Hello, I'm
            </div>

            <h1 className="hero-name fade-in">{personalInfo.name}</h1>
            <h2 className="hero-role fade-in">
              <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </h2>

            <p className="hero-tagline fade-in">
              {personalInfo.tagline}
            </p>

            <div className="hero-buttons fade-in">
              {/* View Projects */}
              <button
                className="btn btn-primary"
                onClick={scrollToProjects}
              >
                View Projects
                <FiArrowRight className="btn-icon" />
              </button>

              {/* Download Resume */}
              <a
                href="/Resume.pdf"
                download
                className="btn btn-secondary"
              >
                <FiDownload className="btn-icon" />
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hero-visual fade-in">
            <div className="hero-circle-container">
              <div className="hero-circle hero-circle-1"></div>
              <div className="hero-circle hero-circle-2"></div>
              <div className="hero-circle hero-circle-3"></div>

              <div className="hero-avatar">
                <div className="avatar-content">
                  <span className="avatar-initials">
                    {personalInfo.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;