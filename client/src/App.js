import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import ProjectsPage from './ProjectsPage';
import Chatbot from './Chatbot';
import ContactForm from './ContactForm';

function App() {
  const projectsRef = useRef(null);
  const [showProjects, setShowProjects] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (projectsRef.current) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollPercentage = (scrollPosition / windowHeight) * 100;

        if (scrollPercentage > 30 && !showProjects) {
          setShowProjects(true);
        } else if (scrollPercentage <= 30 && showProjects) {
          setShowProjects(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showProjects]);

  useEffect(() => {
    if (showProjects && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showProjects]);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div className="App">
      <div className="background-animation-container">
        <div className="background-glow-1"></div>
        <div className="background-glow-2"></div>
        <div className="background-glow-3"></div>
        <div className="background-glow-4"></div>
        <div className="background-glow-5"></div>
        <div className="background-glow-6"></div>
        <div className="background-glow-7"></div>
        <div className="background-glow-8"></div>
        <div className="background-glow-9"></div>
        <div className="background-glow-10"></div>
        <div className="background-glow-11"></div>
        <div className="background-glow-12"></div>
        <div className="background-glow-13"></div>
        <div className="background-glow-14"></div>
        <div className="background-glow-15"></div>
        <div className="abstract-visual-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        {/* Add more glowing elements here if needed */}
      </div>
      <div className="top-decoration">
        <div className="header-line"></div>
        <div className="header-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="header-text">Welcome to my Portfolio</div>
      </div>
      <header className="App-header">
        <div className="header-container">
          <div className="left-content">
            <p className="greeting">Hi,</p>
            <h1 className="name">I'm Akshat Nigam</h1>
            <p className="title">Generative AI | MERN Stack | Data Science</p>
            <button className="hire-button" onClick={toggleContactForm}>Hire Me →</button>
            <div className="social-links">
              <a href="https://github.com/nAkshat2103" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/akshat-nigam-316049258/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="right-content">
            <p className="expertise">Student at</p>
            <p className="location-title">Thapar University</p>
            <p className="expertise-title">Studying Computer Science and <br/> Business Systems</p>
            <p className="description">I am a Computer Science and Business Systems student currently seeking opportunities for jobs and internships. Let's connect!</p>
            <a href="/api/download-cv" className="download-cv" download>Download CV ↓</a>
            <div className="lets-chat" onClick={toggleChatbot}>
              <span>Let's Chat</span>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div ref={projectsRef} className={`projects-section ${showProjects ? 'show' : ''}`}>
          <ProjectsPage />
        </div>
      </main>
      {showChatbot && <Chatbot onClose={toggleChatbot} />}
      <ContactForm isOpen={showContactForm} onClose={toggleContactForm} />
    </div>
  );
}

export default App;
