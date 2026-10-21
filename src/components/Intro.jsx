import "../styles/Intro.css";
import profilePicture from "../assets/profile-picture.jpg";

export function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="intro-content">
        <img src={profilePicture} alt="Hamza Simsek" className="profile-pic" width="150" height="150" />
        <h1>Hi, I&apos;m Hamza Simsek <span aria-hidden="true">👋</span></h1>
        <p className="intro-subtitle"><span aria-hidden="true">👨‍💻 </span>Full-Stack Developer | AI</p>
        <p>Building inclusive and user-friendly web applications.</p>
        <nav className="intro-buttons" aria-label="Main">
          <a href="#about" className="intro-button intro-primary-btn">About</a>
          <a href="#skills" className="intro-button intro-primary-btn">Skills</a>
          <a href="#projects" className="intro-button intro-primary-btn">Projects</a>
          <a href="#contact" className="intro-button intro-primary-btn">Contact</a>
        </nav>
      </div>
    </section>
  );
}

export default Intro;
