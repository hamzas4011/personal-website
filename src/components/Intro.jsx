import React from "react";
import "../styles/Intro.css";
import profilePicture from "../assets/profile-picture.jpg"; 

export function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="intro-content">
        {/* Profile Picture */}
        <img src={profilePicture} alt="Hamza Simsek" className="profile-pic" />

        {/* Name & Role */}
        <h1>Hi, I'm Hamza Simsek 👋</h1>
        <h2>👨‍💻 Full-Stack Developer | Accessibility | Universal Design</h2>
        <p>Building inclusive and user-friendly web applications.</p>

        {/* Call-to-Action Buttons */}
        <div className="intro-buttons">
          <a href="#about" className="button primary-btn">About Me</a>
          <a href="#projects" className="button secondary-btn">My Projects</a>
          <a href="#contact" className="button primary-btn">Contact</a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
