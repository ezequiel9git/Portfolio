import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="bg-black/50 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Nombre */}
        <motion.h1
          className="text-xl md:text-2xl font-extrabold text-cyan-400 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Ezequiel Parrado López
        </motion.h1>

        {/* Navegación */}
        <nav className="space-x-4 text-sm md:text-base font-medium text-gray-200">
          {[
            { name: "Sobre mí", href: "#about" },
            { name: "Proyectos", href: "#projects" },
            { name: "Tecnologías", href: "#technologies" },
            { name: "Contacto", href: "#contact" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              className="hover:text-blue-400 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
