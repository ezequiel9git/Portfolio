import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-black/40 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Contacto</h2>
        <p className="mb-6 text-gray-300">¿Querés ponerte en contacto conmigo? Elegí el medio que prefieras:</p>

        <div className="flex justify-center gap-8 text-3xl text-gray-300">
          <a href="mailto:ezequielparradolopez@gmail.com" className="hover:text-blue-400">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/ezequielparradolopez" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ezequiel9git" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
