import React from "react";
import "../App.css"; 

export default function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="intro-content">
        <h1>Hi, I'm Hamza Simsek 👋</h1>
        <h2>👨‍💻 Full-Stack Developer | Python | Universal Design</h2>
        <p>Building inclusive & user-friendly web applications.</p>

        <div className="intro-buttons">
          <a href="#projects" className="button primary-btn">View My Projects</a>
          <a href="#contact" className="button secondary-btn">Let's Connect</a>
        </div>
      </div>
    </section>
  );
}

