import React from "react";
import "../styles/Intro.css";
import profilePicture from "../assets/profile-picture.jpg";

export function Intro() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="intro" className="intro">
      <div className="intro-content">
        <img src={profilePicture} alt="Hamza Simsek" className="profile-pic" />
        <h1>Hi, I'm Hamza Simsek 👋</h1>
        <h2>👨‍💻 Full-Stack Developer | Universal Design</h2>
        <p>Building inclusive and user-friendly web applications.</p>
        <div className="intro-buttons">
          <button onClick={() => handleScroll("about")} className="intro-button intro-primary-btn">About</button>
          <button onClick={() => handleScroll("projects")} className="intro-button intro-primary-btn">Projects</button>
          <button onClick={() => handleScroll("contact")} className="intro-button intro-primary-btn">Contact</button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
