import React from "react";
import "../styles/Skills.css";
import { 
  FaJs, FaHtml5, FaCss3, FaPython, FaReact, FaNodeJs, FaGitAlt, FaAws, 
  FaDatabase
} from "react-icons/fa";

// Custom SVG components for missing icons
const CSharpIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#239120" d="M12 0L1 6v12l11 6 11-6V6L12 0zm5.5 15h-2v-2h-2v2h-2v-2h-2v2h-2v-6h2v2h2v-2h2v2h2v-2h2v6zM12 4l9 5.25v5.5L12 20l-9-5.25v-5.5L12 4z"/>
  </svg>
);

const TkinterIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#ffcc00"/>
    <text x="6" y="16" fill="black" fontSize="12" fontWeight="bold">Tk</text>
  </svg>
);

const PygameIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#4b8bbe"/>
    <text x="5" y="16" fill="white" fontSize="12" fontWeight="bold">PyG</text>
  </svg>
);

const DotNetIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#512bd4"/>
    <text x="5" y="16" fill="white" fontSize="12" fontWeight="bold">.NET</text>
  </svg>
);

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-box">
        <h2>Skills</h2>

        {/* Programming Languages */}
        <div className="skills-category">
          <h3>Programming Languages</h3>
          <div className="skills-list">
            <div className="skill-item"><FaJs className="skill-icon js" /> <span>JavaScript</span></div>
            <div className="skill-item"><FaHtml5 className="skill-icon html" /> <span>HTML</span></div>
            <div className="skill-item"><FaCss3 className="skill-icon css" /> <span>CSS</span></div>
            <div className="skill-item"><FaPython className="skill-icon python" /> <span>Python</span></div>
            <div className="skill-item"><CSharpIcon className="skill-icon csharp" /> <span>C#</span></div>
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="skills-category">
          <h3>Frameworks & Libraries</h3>
          <div className="skills-list">
            <div className="skill-item"><FaReact className="skill-icon react" /> <span>React.js</span></div>
            <div className="skill-item"><FaNodeJs className="skill-icon nodejs" /> <span>Node.js</span></div>
            <div className="skill-item"><TkinterIcon className="skill-icon tkinter" /> <span>Tkinter</span></div>
            <div className="skill-item"><PygameIcon className="skill-icon pygame" /> <span>Pygame</span></div>
            <div className="skill-item"><DotNetIcon className="skill-icon dotnet" /> <span>.NET</span></div>
          </div>
        </div>

        {/* Development Tools */}
        <div className="skills-category">
          <h3>Development Tools</h3>
          <div className="skills-list">
            <div className="skill-item"><FaGitAlt className="skill-icon git" /> <span>Git</span></div>
            <div className="skill-item"><FaDatabase className="skill-icon sql" /> <span>SQL</span></div>
            <div className="skill-item"><FaAws className="skill-icon aws" /> <span>AWS</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
