import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-extrabold text-blue-500 animate-pulse">
        Hi, I'm Hamza 🚀
      </h1>
      <p className="text-lg text-gray-300 mt-4">Frontend Developer | React.js | Tailwind CSS</p>
      <div className="mt-6 flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all">
          My Projects
        </a>
        <a href="#contact" className="px-6 py-3 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all">
          Contact Me
        </a>
      </div>
    </div>
  );
}
