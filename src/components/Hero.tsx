import React, { useState, Suspense, lazy } from 'react';
import InteractiveTerminal from './InteractiveTerminal';

// Lazy load components
const Projects = lazy(() => import('./Projects'));
const Resume = lazy(() => import('./Resume'));

interface HeroProps {
  activeSection: 'projects' | 'resume';
  setActiveSection: (section: 'projects' | 'resume') => void;
}

const Hero: React.FC<HeroProps> = ({ activeSection, setActiveSection }) => {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="typing-text">
                Hello! I'm <span className="highlight">cyberwar</span>
              </span>
            </h1>
            <p className="hero-description">
              I'm a Software Engineer and a junior Computer Engineering major with passion for problem-solving, strong foundation in computer science principles and proven track record of delivering high-quality and scalable code.
            </p>
            <div className="hero-nav">
              <div className="nav-item">
                <span className="nav-number">00</span>
                <a 
                  href="#" 
                  className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection('resume');
                  }}
                >
                  RESUME
                </a>
              </div>
              <div className="nav-item">
                <span className="nav-number">01</span>
                <a 
                  href="#" 
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection('projects');
                  }}
                >
                  PROJECTS
                </a>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/elcanaoel" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://x.com/enejocoder" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/enejocoder" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/in/enejocoder" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <button 
                className="terminal-button"
                onClick={() => setShowTerminal(true)}
                title="Open Interactive Terminal"
              >
                <i className="fas fa-terminal"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
            {activeSection === 'projects' ? <Projects /> : <Resume />}
          </Suspense>
        </div>
      </div>
      {showTerminal && <InteractiveTerminal />}
    </section>
  );
};

export default Hero;
