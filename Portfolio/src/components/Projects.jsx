import React from "react";
import { motion } from "framer-motion";
import elysiaImg from "../assets/elysia.png";
import vuela21Img from "../assets/vuela21.png";
import portfolioImg from "../assets/portfolio.png";

const projects = [
  {
    title: "Elysia",
    description:
      "Aplicación de trabajo para terapeutas que permite gestionar pacientes, citas e informes de consultas.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "React",
      "Bootstrap",
      "Django",
      "PostgreSQL",
    ],
    url: "https://github.com/ezequiel9git/ProyectoTFG",
    image: elysiaImg,
  },
  {
    title: "Vuela 21",
    description:
      "Aplicación web para la empresa de reparto Vuela 21. Permite gestionar envíos, rutas, repartidores, etc.",
    tech: [
      "HTML",
      "TypeScript",
      "PHP",
      "Angular",
      "Tailwind CSS",
      "Symfony",
      "PostgreSQL",
    ],
    url: "https://github.com/CodeArts-Solutions/bats-A-Vuela21",
    image: vuela21Img,
  },
  {
    title: "Portfolio",
    description: "Presente portfolio personal.",
    tech: ["HTML", "JavaScript", "Vite", "React", "Tailwind CSS"],
    url: "https://github.com/ezequiel9git/Portfolio",
    image: portfolioImg,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-14">
          Proyectos
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/70 rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm border border-gray-700 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.tech.map((t, i) => (
                    <li
                      key={i}
                      className="bg-blue-950 text-blue-300 px-2 py-1 rounded"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  Ver en GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
