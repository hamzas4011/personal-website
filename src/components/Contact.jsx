import React from "react";
import "../styles/Contact.css"; // Import CSS
import { FaEnvelope, FaLinkedin } from "react-icons/fa"; // Import icons

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>📩 Get in Touch</h2>
        <p>Feel free to reach out to me via email or LinkedIn!</p>

        {/* Contact Links */}
        <div className="contact-links">
          <a href="mailto:your-email@example.com" className="contact-item" target="_blank">
            <FaEnvelope className="contact-icon" />
            <span>your-email@example.com</span>
          </a>
          
          <a href="https://linkedin.com/in/yourlinkedin" className="contact-item" target="_blank">
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
