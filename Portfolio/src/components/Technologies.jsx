import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython, SiPhp, SiMysql, SiVirtualbox,
  SiPostgresql, SiXml, SiMarkdown, SiAngular, SiReact, SiVite, SiTailwindcss, SiMariadb,
  SiBootstrap, SiDjango, SiSpring, SiSymfony, SiNodedotjs, SiMoodle, SiGit, SiDbeaver,
  SiGithub, SiDocker, SiApache, SiNotepadplusplus, SiEclipseide,
} from 'react-icons/si';
import { FaCode, FaDatabase, FaJava } from 'react-icons/fa';

// Colores personalizados por tecnología (nombre coincide con items)
const iconColors = {
  HTML: "#e34c26",
  CSS: "#264de4",
  JavaScript: "#f0db4f",
  TypeScript: "#3178c6",
  Python: "#3776AB",
  Java: "#e34c26",
  PHP: "#7952b3",
  SQL: "#0db7ed",
  XML: "#3c873a",
  Markdown: "#083fa1",

  Angular: "#dd0031",
  React: "#61dafb",
  Vite: "#646cff",
  "Tailwind CSS": "#38bdf8",
  Bootstrap: "#7952b3",
  Django: "#3c873a",
  "Spring Boot": "#6db33f",
  Symfony: "#7952b3",
  "Node.js": "#3c873a",
  PostgreSQL: "#0db7ed",
  MariaDB: "#f7931e",
  Moodle: "#f7931e",

  Git: "#f1502f",
  GitHub: "#ffffff",
  Docker: "#0db7ed",
  "VS Code": "#007ACC",
  Eclipse: "#7952b3",
  "Notepad++": "#90e59a",
  Apache: "#d22128",
  Virtualenv: "#3c873a",
  DBeaver: "#e38c00",
  "MySQL Workbench": "#0db7ed",
};

const sections = [
  {
    title: "Lenguajes",
    items: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "XML", icon: <SiXml /> },
      { name: "Markdown", icon: <SiMarkdown /> },
    ],
  },
  {
    title: "Frameworks y Plataformas",
    items: [
      { name: "Angular", icon: <SiAngular /> },
      { name: "React", icon: <SiReact /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Spring Boot", icon: <SiSpring /> },
      { name: "Symfony", icon: <SiSymfony /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MariaDB", icon: <SiMariadb /> },
      { name: "Moodle", icon: <SiMoodle /> },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Eclipse", icon: <SiEclipseide /> },
      { name: "Notepad++", icon: <SiNotepadplusplus /> },
      { name: "Apache", icon: <SiApache /> },
      { name: "Virtualenv", icon: <SiVirtualbox /> },
      { name: "DBeaver", icon: <SiDbeaver /> },
      { name: "MySQL Workbench", icon: <SiMysql /> },
    ],
  },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-400">Tecnologías</h2>

        <div className="grid gap-12 md:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/70 backdrop-blur rounded-2xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-4">
                {section.title}
              </h3>
              <ul className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                {section.items.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-2 bg-gray-700/60 hover:bg-blue-700/40 transition duration-300 px-3 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span
                      className="text-lg"
                      style={{ color: iconColors[item.name] || "#93c5fd" }}
                    >
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
