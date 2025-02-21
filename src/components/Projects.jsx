import React from "react";
import "../styles/Projects.css"; 
import projects from "../projectsData"; 
import { FaChevronDown } from "react-icons/fa";

export function Projects() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("contact");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.slice(0, 6).map((project, index) => (
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

      <div className="scroll-down" onClick={scrollToNextSection}>
        <FaChevronDown className="scroll-icon" />
      </div>
    </section>
  );
}

export default Projects;
