import React from "react";
import "../styles/Projects.css"; // Import styles

export default function Projects() {
  // Project data
  const projects = [
    {
      name: "Project 1",
      description: "A cool web app built with React and Node.js.",
      liveLink: "https://project1.vercel.app", // Has Live Demo
      githubLink: "https://github.com/username/project1",
    },
    {
      name: "Project 2",
      description: "An e-commerce site made with Next.js and Firebase.",
      liveLink: "https://project2.vercel.app", // Has Live Demo
      githubLink: "https://github.com/username/project2",
    },
    {
      name: "Project 3",
      description: "A portfolio site using React and Tailwind CSS.",
      liveLink: "https://project3.vercel.app", // Has Live Demo
      githubLink: "https://github.com/username/project3",
    },
    {
      name: "Project 4",
      description: "A Python-based CLI tool for data analysis.",
      liveLink: null, // No Live Demo, only GitHub
      githubLink: "https://github.com/username/project4",
    },
    {
      name: "Project 5",
      description: "A simple to-do app using React and LocalStorage.",
      liveLink: null, // No Live Demo, only GitHub
      githubLink: "https://github.com/username/project5",
    },
    {
      name: "Project 6",
      description: "An API service built with Flask and MongoDB.",
      liveLink: null, // No Live Demo, only GitHub
      githubLink: "https://github.com/username/project6",
    },
  ];

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
