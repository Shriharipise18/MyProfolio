import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Education from '../sections/Education';
import CodingProfiles from '../sections/CodingProfiles';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';
import '../styles/App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
