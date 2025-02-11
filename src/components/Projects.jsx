import React from "react";
import "../styles/Projects.css"; 
import projects from "../projectsData"; 

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" className="button primary-btn">
                    Live Demo
                  </a>
                )}
                <a href={project.githubLink} target="_blank" className="button secondary-btn">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
