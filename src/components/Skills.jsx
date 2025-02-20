import React from "react";
import "../styles/Skills.css";
import { FaJs, FaPython, FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-box">
        <h2>Skills</h2>

        <div className="skills-category">
          <h3>Programming Languages</h3>
          <div className="skills-list">
            <div className="skill-item"><FaJs className="skill-icon js" /> <span>JavaScript</span></div>
            <div className="skill-item"><FaPython className="skill-icon python" /> <span>Python</span></div>
            <div className="skill-item"><FaHtml5 className="skill-icon html" /> <span>HTML</span></div>
            <div className="skill-item"><FaCss3 className="skill-icon css" /> <span>CSS</span></div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Frameworks & Libraries</h3>
          <div className="skills-list">
            <div className="skill-item"><FaReact className="skill-icon react" /> <span>React.js</span></div>
            <div className="skill-item"><FaNodeJs className="skill-icon nodejs" /> <span>Node.js</span></div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Development Tools</h3>
          <div className="skills-list">
            <div className="skill-item"><FaGitAlt className="skill-icon git" /> <span>Git</span></div>
            <div className="skill-item"><FaGithub className="skill-icon github" /> <span>GitHub</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
