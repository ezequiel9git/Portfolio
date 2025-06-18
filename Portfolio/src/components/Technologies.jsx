import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Lenguajes",
    items: [
      "HTML", "CSS", "JavaScript", "TypeScript", "Python",
      "Java", "PHP", "SQL", "XML", "Markdown"
    ],
  },
  {
    title: "Frameworks y Plataformas",
    items: [
      "Angular", "React", 
      "Vite", "Axios", 
      "Tailwind CSS", "Bootstrap",
      "Django", "SpringBoot",
      "Symfony", "Node.js",
      "PostgreSQL", "MariaDB", "Moodle",
    ],
  },
  {
    title: "Herramientas",
    items: [
      "Git", "Eclipse", 
      "GitHub", "Visual Studio Code", 
      "Apache", "Notepad++",
      "DBeaver", "Virtualenv",
      "Workbench", "Docker"
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
                    className="bg-gray-700/60 hover:bg-blue-700/40 transition duration-300 px-3 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
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
