// src/components/Projects.js
import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="project-cards">
                <div className="project-card">
                    <h3>Project One</h3>
                    <p>Description of project one.</p>
                </div>
                <div className="project-card">
                    <h3>Project Two</h3>
                    <p>Description of project two.</p>
                </div>
                {/* Add more project cards as needed */}
            </div>
        </section>
    );
};

export default Projects;
