import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Chatbot from './Chatbot';
import ContactForm from './ContactForm';
import ProjectModal from './components/ProjectModal';

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsRef = useRef(null);
  const [autoScrolled, setAutoScrolled] = useState(false);

  const projects = [
    {
      name: "Project 1",
      tagline: "Tagline",
      description: "Description ",
      image: "/path/to/image1.jpg",
      techStack: "Tech stack ",
      learnings: "kuch bhi content",
      demoLink: "https://demo1.com",
      techStackBadges: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "Project 2",
      tagline: "tagline.",
      description: "Description" ,
      image: "/images/backdoor.png",
      techStack: "Tech stack ",
      learnings: "kuch bhi content",
      demoLink: "https://demo2.com",
      techStackBadges: ["Python", "TensorFlow", "AWS"],
    },
    {
      name: "Project 3",
      tagline: "taggline",
      description: "Description",
      image: "/path/to/image3.jpg",
      techStack: "Tech stack",
      learnings: "contentt",
      demoLink: "https://demo3.com",
      techStackBadges: ["Vue.js", "Firebase", "Stripe"],
    },
    {
      name: "Project 4",
      tagline: "tagline",
      description: "Description ",
      image: "/path/to/image4.jpg",
      techStack: "Tech stack ",
      learnings: "content",
      demoLink: "https://demo4.com",
      techStackBadges: ["Angular", "TypeScript", "PostgreSQL"],
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (autoScrolled) return;
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      if (scrollY > vh * 0.25) {
        if (projectsRef.current) {
          projectsRef.current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          setAutoScrolled(true);
          setTimeout(() => {
            setShowProjects(true);
          }, 100);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [autoScrolled]);

  // Intersection Observer for projects section fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowProjects(true);
          } else {
            setShowProjects(false);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

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
        <div
          ref={projectsRef}
          className={`projects-section ${showProjects ? 'show' : ''} fade-in-section`}
        >
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card"
                onClick={() => openModal(project)}
              >
                <div className="project-info">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-tagline">{project.tagline}</p>
                    <div className="project-badges-container">
                        <div className="tech-badges">
                            {project.techStackBadges.map((badge, i) => (
                                <span key={i} className="tech-badge">{badge}</span>
                            ))}
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {showChatbot && <Chatbot onClose={toggleChatbot} />}
      {showContactForm && <ContactForm isOpen={showContactForm} onClose={toggleContactForm} />}
      {showModal && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
