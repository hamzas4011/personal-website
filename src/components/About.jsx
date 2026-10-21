import "../styles/About.css";
import { FaLaptopCode, FaGamepad, FaHiking, FaBook, FaChevronDown } from "react-icons/fa";

export function About() {
  return (
    <section id="about" className="about">
      <div className="about-box">
        <h2>About</h2>
        <p>
          I&apos;m a Full-Stack Developer with a Master&apos;s in Applied Computer and IT.
          I love building applications that make technology more inclusive and user-friendly.
        </p>
        <p>
          Outside of coding, I enjoy reading, playing video games, and hiking in nature to recharge.
        </p>
        <ul className="about-icons">
          <li className="about-item">
            <FaLaptopCode className="icon code" aria-hidden="true" />
            <span>Coding</span>
          </li>
          <li className="about-item">
            <FaBook className="icon book" aria-hidden="true" />
            <span>Reading</span>
          </li>
          <li className="about-item">
            <FaGamepad className="icon game" aria-hidden="true" />
            <span>Gaming</span>
          </li>
          <li className="about-item">
            <FaHiking className="icon hike" aria-hidden="true" />
            <span>Hiking</span>
          </li>
        </ul>
      </div>

      <a href="#skills" className="scroll-down" aria-label="Scroll to Skills section">
        <FaChevronDown className="scroll-icon" aria-hidden="true" />
      </a>
    </section>
  );
}

export default About;
