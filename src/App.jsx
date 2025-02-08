import React from "react";
import "./index.css"; // Make sure to use your CSS file

export default function App() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="#intro">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Sections */}
      <section id="intro" className="section intro">
        <h1>Hi, I'm Hamza 🚀</h1>
        <p>Frontend Developer | React.js | CSS</p>
      </section>

      <section id="about" className="section about">
        <h2>About Me</h2>
        <p>A passionate frontend developer learning React.js and backend technologies.</p>
      </section>

      <section id="projects" className="section projects">
        <h2>My Projects</h2>
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Details about your project...</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Details about another project...</p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:hamza@example.com">hamzas4011@hotmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/hamza" target="_blank">My LinkedIn</a></p>
      </section>
    </>
  );
}
