import React from "react";
import "../styles/Skills.css";
import { 
  FaJs, FaHtml5, FaCss3, FaPython, FaReact, FaNodeJs, FaGitAlt, FaAws, 
  FaDatabase, FaChevronDown, FaMicrosoft 
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiDotnet, SiTkinter, SiPygame, SiMysql
} from "react-icons/si";

const Skills = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-box">
        <h2>Skills</h2>
        
        <div className="skills-category">
          <h3>Programming Languages</h3>
          <div className="skills-list">
            <div className="skill-item"><FaJs className="skill-icon js" /> <span>JavaScript</span></div>
            <div className="skill-item"><FaHtml5 className="skill-icon html" /> <span>HTML</span></div>
            <div className="skill-item"><FaCss3 className="skill-icon css" /> <span>CSS</span></div>
            <div className="skill-item"><FaPython className="skill-icon python" /> <span>Python</span></div>
            <div className="skill-item"><FaMicrosoft className="skill-icon csharp" /> <span>C#</span></div>
            <div className="skill-item"><SiTypescript className="skill-icon typescript" /> <span>TypeScript</span></div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Frameworks & Libraries</h3>
          <div className="skills-list">
            <div className="skill-item"><FaReact className="skill-icon react" /> <span>React.js</span></div>
            <div className="skill-item"><FaNodeJs className="skill-icon nodejs" /> <span>Node.js</span></div>
            <div className="skill-item"><SiTkinter className="skill-icon tkinter" /> <span>Tkinter</span></div>
            <div className="skill-item"><SiPygame className="skill-icon pygame" /> <span>Pygame</span></div>
            <div className="skill-item"><SiDotnet className="skill-icon dotnet" /> <span>.NET</span></div>
            <div className="skill-item"><SiNextdotjs className="skill-icon nextjs" /> <span>Next.js</span></div>
            <div className="skill-item"><SiTailwindcss className="skill-icon tailwind" /> <span>Tailwind CSS</span></div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Development Tools</h3>
          <div className="skills-list">
            <div className="skill-item"><FaGitAlt className="skill-icon git" /> <span>Git</span></div>
            <div className="skill-item"><SiMysql className="skill-icon sql" /> <span>SQL</span></div>
            <div className="skill-item"><FaAws className="skill-icon aws" /> <span>AWS</span></div>
          </div>
        </div>
      </div>

      <div className="scroll-down" onClick={scrollToNextSection}>
        <FaChevronDown className="scroll-icon" />
      </div>
    </section>
  );
};

export default Skills;
