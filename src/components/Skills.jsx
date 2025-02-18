import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>Technical Skills</h2>

        <div className="skills-category">
          <h3>Languages</h3>
          <div className="skills-list">
            <span>⚡ JavaScript</span>
            <span>🐍 Python</span>
            <span>🌐 HTML</span>
            <span>🎨 CSS</span>
          </div>
        </div>

        <div className="skills-category">
          <h3>Frameworks & Libraries</h3>
          <div className="skills-list">
            <span>⚛️ React.js</span>
            <span>🟢 Node.js</span>
          </div>
        </div>

        <div className="skills-category">
          <h3>Tools & Technologies</h3>
          <div className="skills-list">
            <span>🔧 Git</span>
            <span>🐙 GitHub</span>
            <span>💻 VS Code</span>
            <span>♿ Accessibility (WCAG)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
