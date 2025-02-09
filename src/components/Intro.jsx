import React from "react";
import "../styles/Intro.css"; 

export default function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="intro-content">
        <h1>Hi, I'm Hamza Simsek 👋</h1>
        <h2>👨‍💻 Full-Stack Developer | Accessibility | Universal Design</h2>
        <p>Building inclusive and user-friendly web applications.</p>

        <div className="intro-buttons">
          <a href="#about" className="button primary-btn">About Me</a>
          <a href="#projects" className="button secondary-btn">My Projects</a>
          <a href="#contact" className="button primary-btn">Contact</a>
        </div>
      </div>
    </section>
  );
}
