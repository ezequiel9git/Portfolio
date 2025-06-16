const projects = [
  {
    title: "Chat WebSocket",
    description: "Un chat en tiempo real usando Express y WebSockets.",
    url: "https://github.com/ezequiel9git/chat_websocket",
    tech: ["Node.js", "Express", "Socket.IO"],
  },
  {
    title: "CRUD Frontend JS",
    description: "Aplicación frontend para operaciones CRUD básicas con localStorage.",
    url: "https://github.com/ezequiel9git/crud_frontendjs",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "MongoDB CRUD API",
    description: "API RESTful con MongoDB para operaciones CRUD.",
    url: "https://github.com/ezequiel9git/crud-mongodb",
    tech: ["Node.js", "MongoDB", "Express"],
  },
  {
    title: "API Express",
    description: "Ejemplo de estructura básica para una API con Express.",
    url: "https://github.com/ezequiel9git/express-api",
    tech: ["Node.js", "Express"],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <li key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
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
