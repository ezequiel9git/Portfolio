import React from 'react';

const projects = [
  // ... tus proyectos
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-black/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-md p-6 hover:shadow-xl transition text-white">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <li key={i} className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded">
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-medium"
              >
                Ver en GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
