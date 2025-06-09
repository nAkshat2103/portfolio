import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1.",
      image: "https://via.placeholder.com/300x200",
      link: "#"
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2.",
      image: "https://via.placeholder.com/300x200",
      link: "#"
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3.",
      image: "https://via.placeholder.com/300x200",
      link: "#"
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-header">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 