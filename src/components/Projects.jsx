import React from "react";
import "../styles/Projects.css"; 
import projects from "../projectsData"; 

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        <p className="projects-description">
          Here are some of the projects I've worked on, showcasing my skills in frontend and backend development.
        </p>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-button project-primary-btn">
                    Live Demo
                  </a>
                )}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-button project-secondary-btn">
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
