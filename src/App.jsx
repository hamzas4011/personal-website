import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css"; 

export default function App() {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
