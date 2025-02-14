import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-button">Home</Link>
      <Link to="/about" className="nav-button">About</Link>
      <Link to="/projects" className="nav-button">Projects</Link>
      <Link to="/contact" className="nav-button">Contact</Link>
    </nav>
  );
}

export default Navbar;
