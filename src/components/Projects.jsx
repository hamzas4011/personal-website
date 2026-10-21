import "../styles/Projects.css";
import projects from "../projectsData";
import { FaChevronDown } from "react-icons/fa";

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        <ul className="projects-list">
          {projects.slice(0, 8).map((project) => (
            <li key={project.name} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button project-primary-btn"
                    aria-label={`${project.name} live demo (opens in new tab)`}
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button project-secondary-btn"
                  aria-label={`${project.name} on GitHub (opens in new tab)`}
                >
                  GitHub
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <a href="#contact" className="scroll-down" aria-label="Scroll to Contact section">
        <FaChevronDown className="scroll-icon" aria-hidden="true" />
      </a>
    </section>
  );
}

export default Projects;
