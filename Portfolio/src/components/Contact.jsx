import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-t from-white/80 via-gray-100/60 to-white/80 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Contacto</h2>
        <p className="text-gray-700 mb-6">
          ¿Querés ponerte en contacto conmigo? Elegí el medio que prefieras:
        </p>

        <div className="flex justify-center gap-8 text-3xl">
          <a
            href="mailto:ezequielparradolopez@gmail.com"
            className="text-gray-700 hover:text-blue-600 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/ezequielparradolopez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-700 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ezequiel9git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
