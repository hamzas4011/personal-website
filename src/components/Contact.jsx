import "../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-box">
        <h2>Contact</h2>
        <p>Feel free to contact me via email or LinkedIn, or explore my projects on GitHub.</p>

        <div className="contact-links">
          <a href="mailto:hamzas4011@hotmail.com" className="contact-item email" aria-label="Send me an email">
            <FaEnvelope className="contact-icon" aria-hidden="true" />
          </a>

          <a href="https://www.linkedin.com/in/hamza-simsek-033a14108/" className="contact-item linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in new tab)">
            <FaLinkedin className="contact-icon" aria-hidden="true" />
          </a>

          <a href="https://github.com/hamzas4011/" className="contact-item github" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in new tab)">
            <FaGithub className="contact-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
