import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython, SiPhp, SiMysql,
  SiPostgresql, SiXml, SiMarkdown, SiAngular, SiReact, SiVite, SiTailwindcss,
  SiBootstrap, SiDjango, SiSpring, SiSymfony, SiNodedotjs, SiMoodle, SiGit, SiDbeaver,
  SiGithub, SiDocker, SiApache, SiNotepadplusplus, SiEclipseide,
} from 'react-icons/si';
import { FaCode, FaDatabase, FaTools, FaJava } from 'react-icons/fa';

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
      { name: "SQL", icon: <SiMysql /> },
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
      { name: "MariaDB", icon: <SiMysql /> },
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
      { name: "Virtualenv", icon: <FaTools /> },
      { name: "DBeaver", icon: <SiDbeaver /> },
      { name: "MySQL Workbench", icon: <FaDatabase /> },
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
                    <span className="text-blue-400 text-lg">{item.icon}</span>
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
