import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const techStack = [
  // ... tus tecnologías
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 px-4 bg-black/40 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Tecnologías</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center text-white">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="text-5xl">{tech.icon}</div>
              <span className="text-sm text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
