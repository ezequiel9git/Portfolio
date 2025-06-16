import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-800" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 px-4 bg-gradient-to-b from-gray-100/70 via-white/60 to-gray-50/70 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Tecnologías</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 bg-white/70 p-4 rounded-xl shadow hover:scale-105 transition">
              <div className="text-5xl">{tech.icon}</div>
              <span className="text-sm font-medium text-gray-800">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


