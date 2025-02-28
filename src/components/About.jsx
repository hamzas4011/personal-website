import React from "react";
import "../styles/About.css";
import { FaLaptopCode, FaGamepad, FaHiking, FaBook, FaChevronDown } from "react-icons/fa";

export function About() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("skills"); 
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-box">
        <h2>About</h2>
        <p>
          I'm a Full-Stack Developer with a Master's in Applied Computer and IT, specializing in Accessibility & Universal Design.
          I love building applications that make technology more inclusive and user-friendly.
        </p>
        <p>
          Outside of coding, I enjoy reading, playing video games, and hiking in nature to recharge.
        </p>
        <div className="about-icons">
          <div className="about-item">
            <FaLaptopCode className="icon code" />
          </div>
          <div className="about-item">
            <FaBook className="icon book" />
          </div>
          <div className="about-item">
            <FaGamepad className="icon game" />
          </div>
          <div className="about-item">
            <FaHiking className="icon hike" />
          </div>
        </div>
      </div>
      
      <div className="scroll-down" onClick={scrollToNextSection}>
        <FaChevronDown className="scroll-icon" />
      </div>
    </section>
  );
}

export default About;
