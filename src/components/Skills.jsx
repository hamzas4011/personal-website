import React from "react";
import "../styles/Skills.css";
import { FaReact, FaNodeJs, FaJs, FaPython, FaGithub, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiVisualstudiocode, SiAccessibility } from "react-icons/si";

export function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>Technical Skills</h2>

        <div className="skills-category">
          <h3>Languages</h3>
          <div className="skills-list">
            <div className="skill-item"><FaJs className="skill-icon" /> JavaScript</div>
            <div className="skill-item"><FaPython className="skill-icon" /> Python</div>
            <div className="skill-item"><FaHtml5 className="skill-icon" /> HTML</div>
            <div className="skill-item"><FaCss3Alt className="skill-icon" /> CSS</div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Frameworks & Libraries</h3>
          <div className="skills-list">
            <div className="skill-item"><FaReact className="skill-icon" /> React.js</div>
            <div className="skill-item"><FaNodeJs className="skill-icon" /> Node.js</div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Tools & Technologies</h3>
          <div className="skills-list">
            <div className="skill-item"><FaGitAlt className="skill-icon" /> Git</div>
            <div className="skill-item"><FaGithub className="skill-icon" /> GitHub</div>
            <div className="skill-item"><SiVisualstudiocode className="skill-icon" /> VS Code</div>
            <div className="skill-item"><SiAccessibility className="skill-icon" /> Accessibility (WCAG)</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
