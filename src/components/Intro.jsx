import React, { useEffect } from "react";
import "../styles/Intro.css";
import profilePicture from "../assets/profile-picture.jpg";

export function Intro() {
  useEffect(() => {
    const buttons = document.querySelectorAll(".intro-button");
    
    buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
        this.blur(); // Removes focus from button after click
      });
    });

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("click", function () {
          this.blur();
        });
      });
    };
  }, []);

  return (
    <section id="intro" className="intro">
      <div className="intro-content">
        <img src={profilePicture} alt="Hamza Simsek" className="profile-pic" />
        <h1>Hi, I'm Hamza Simsek 👋</h1>
        <h2>👨‍💻 Full-Stack Developer | Universal Design</h2>
        <p>Building inclusive and user-friendly web applications.</p>
        <div className="intro-buttons">
          <a href="#about" className="intro-button intro-primary-btn">About</a>
          <a href="#projects" className="intro-button intro-primary-btn">Projects</a>
          <a href="#contact" className="intro-button intro-primary-btn">Contact</a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
