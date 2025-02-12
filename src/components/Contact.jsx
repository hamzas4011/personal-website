import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-box">
        <h2>Contact</h2>
        <p>Connect with me on LinkedIn, check out my GitHub, or send me an email.</p>

        <div className="contact-links">
          <a href="mailto:hamzas4011@hotmail.com" className="contact-item" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="contact-icon" />
          </a>

          <a href="https://www.linkedin.com/in/hamza-simsek-033a14108/" className="contact-item" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="contact-icon" />
          </a>

          <a href="https://github.com/yourgithubusername" className="contact-item" target="_blank" rel="noopener noreferrer">
            <FaGithub className="contact-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
