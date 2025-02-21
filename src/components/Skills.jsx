import React from "react";
import "../styles/Skills.css";
import { FaJs, FaPython, FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt, FaAws, FaDatabase, FaCsharp, FaCode } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-box">
        <h2>Skills</h2>

        <div className="skills-category">
          <h3>Programming Languages</h3>
          <div className="skills-list">
            <FaJs className="skill-icon js" />
            <FaHtml5 className="skill-icon html" />
            <FaCss3 className="skill-icon css" />
            <FaPython className="skill-icon python" />
            <FaCsharp className="skill-icon csharp" />
          </div>
        </div>

        <div className="skills-category">
          <h3>Frameworks & Libraries</h3>
          <div className="skills-list">
            <FaReact className="skill-icon react" />
            <FaNodeJs className="skill-icon nodejs" />
            <FaCode className="skill-icon pygame" />
            <FaCode className="skill-icon matplotlib" />
            <FaCode className="skill-icon tkinter" />
            <FaCode className="skill-icon dotnet" />
          </div>
        </div>

        <div className="skills-category">
          <h3>Development Tools</h3>
          <div className="skills-list">
            <FaGitAlt className="skill-icon git" />
            <FaAws className="skill-icon aws" />
            <FaDatabase className="skill-icon sql" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
