import React from 'react';
import profileImage from '../assets/profile.png'; // Importación relativa

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-4 bg-cover bg-center"
      style={{
        backgroundImage: `url('/src/assets/fondo.jpeg')`, // Esta ruta es válida para background-image
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 z-10">
        {/* Texto */}
        <div className="md:w-1/2 bg-gray-900/70 p-8 rounded-2xl shadow-lg text-white">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Sobre mí</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Soy desarrollador web con experiencia en frontend y backend. Me enfoco en tecnologías como React, Node.js y MongoDB.
            Disfruto crear proyectos funcionales y seguir aprendiendo constantemente. Busco oportunidades como desarrollador front-end.
          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-600">
            <img
              src={profileImage}
              alt="Ezequiel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
