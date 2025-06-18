import React from "react";
import { motion } from "framer-motion";
import fondoHero from "../assets/FondoHero.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${fondoHero})`,
      }}
    >
      {/* Overlay de gradiente oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      {/* Contenido */}
      <motion.div
        className="relative z-10 text-center max-w-3xl px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Hola, soy Ezequiel
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Desarrollador web especializado en React, Node.js y experiencias modernas.
        </p>
        <motion.a
          href="#contact"
          className="inline-block px-6 py-3 bg-accent text-white font-medium rounded-lg shadow-lg hover:bg-blue-500 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contáctame
        </motion.a>
      </motion.div>
    </section>
  );
}
