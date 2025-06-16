import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white/70 backdrop-blur-sm shadow-inner"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">
          Sobre mí
        </h2>
        <p className="text-lg leading-relaxed text-gray-800">
          Soy desarrollador web con experiencia en frontend y backend. Me enfoco en tecnologías como React, Node.js y MongoDB.
          Disfruto crear proyectos funcionales y seguir aprendiendo constantemente. Busco oportunidades como desarrollador front-end.
        </p>
      </div>
    </section>
  );
}
