import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                
                <h2 className="modal-title">{project.name}</h2>
                
                <div className="modal-section">
                    <h3>Description</h3>
                    <p>{project.description}</p>
                </div>

                <div className="modal-section">
                    <h3>Tech Stack</h3>
                    <p>{project.techStack}</p>
                </div>

                <div className="modal-section">
                    <h3>What I Learned</h3>
                    <p>{project.learnings}</p>
                </div>

                {project.demoLink && (
                    <div className="modal-section">
                        <h3>Live Demo</h3>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="demo-link">
                            View Live Demo →
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectModal; 