import React from "react";

export default function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 text-center">
      <h1 className="text-6xl font-extrabold text-blue-400 flex items-center gap-3">
        Hi, I'm Hamza 🚀
      </h1>
      <p className="text-lg text-gray-300 mt-4">
        Frontend Developer | React.js | Tailwind CSS
      </p>
      <div className="mt-6 flex gap-6">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg"
        >
          My Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all shadow-lg"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
