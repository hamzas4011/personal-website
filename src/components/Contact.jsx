import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-box">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via email or LinkedIn!</p>

        <div className="contact-links">
          <a href="hamzas4011@hotmail.com" className="contact-item" target="_blank">
            <FaEnvelope className="contact-icon" />
            <span>hamzas4011@hotmail.com</span>
          </a>

          <a href="https://www.linkedin.com/in/hamza-simsek-033a14108/" className="contact-item" target="_blank">
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
