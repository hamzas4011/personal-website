import "../styles/Skills.css";
import {
  FaJs, FaHtml5, FaCss3, FaPython, FaReact, FaNodeJs, FaGitAlt, FaAws,
  FaDatabase, FaChevronDown, FaMicrosoft
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", Icon: FaJs, className: "js" },
      { name: "HTML", Icon: FaHtml5, className: "html" },
      { name: "CSS", Icon: FaCss3, className: "css" },
      { name: "Python", Icon: FaPython, className: "python" },
      { name: "C#", Icon: FaMicrosoft, className: "csharp" },
      { name: "TypeScript", Icon: SiTypescript, className: "typescript" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", Icon: FaReact, className: "react" },
      { name: "Node.js", Icon: FaNodeJs, className: "nodejs" },
      { name: "Tkinter", Icon: FaPython, className: "tkinter" },
      { name: "Pygame", Icon: FaPython, className: "pygame" },
      { name: ".NET", Icon: FaMicrosoft, className: "dotnet" },
      { name: "Next.js", Icon: SiNextdotjs, className: "nextjs" },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git", Icon: FaGitAlt, className: "git" },
      { name: "SQL", Icon: FaDatabase, className: "sql" },
      { name: "AWS", Icon: FaAws, className: "aws" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-box">
        <h2>Skills</h2>

        {skillCategories.map(({ title, skills }) => (
          <div key={title} className="skills-category">
            <h3>{title}</h3>
            <ul className="skills-list">
              {skills.map(({ name, Icon, className }) => (
                <li key={name} className="skill-item">
                  <Icon className={`skill-icon ${className}`} aria-hidden="true" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a href="#projects" className="scroll-down" aria-label="Scroll to Projects section">
        <FaChevronDown className="scroll-icon" aria-hidden="true" />
      </a>
    </section>
  );
};

export default Skills;
