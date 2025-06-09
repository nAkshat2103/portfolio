import React from 'react';
import './ProjectsPage.css';

function ProjectsPage() {
  return (
    <div className="projects-page">
      <h2 className="section-title">Selected Work</h2>
      <div className="project-grid">
        {/* Project Card 1 */}
        <div className="project-card">
          <img src="/images/visionbored.png" alt="VisionBored" className="project-image" />
          <div className="project-info">
            <h3 className="project-name">VisionBored</h3>
            <p className="project-description">A blinking eye to test out the ProCreate gif creation feature</p>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="project-card">
          <img src="/images/cached.png" alt="Cached" className="project-image" />
          <div className="project-info">
            <h3 className="project-name">Cached</h3>
            <p className="project-description">Branding for a niche digital bank concept focusing on tech workers</p>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="project-card">
          <img src="/images/ciri.png" alt="Ciri" className="project-image" />
          <div className="project-info">
            <h3 className="project-name">Ciri</h3>
            <p className="project-description">Ciri from Netflix's the Witcher, with her hair silver like the books. Drawn in Procreate, was awarded platinum on Reddit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage; 