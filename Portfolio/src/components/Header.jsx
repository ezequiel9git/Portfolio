import React from 'react';

export default function Header() {
  return (
    <header className="bg-black/50 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">Ezequiel.dev</h1>
        <nav className="space-x-4 text-sm font-medium text-gray-200">
          <a href="#about" className="hover:text-blue-300">Sobre mí</a>
          <a href="#projects" className="hover:text-blue-300">Proyectos</a>
          <a href="#technologies" className="hover:text-blue-300">Tecnologías</a>
          <a href="#contact" className="hover:text-blue-300">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
