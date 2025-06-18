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
         Soy un desarrollador de aplicaciones web con pasión por el frontend al que le encanta dar vida a las interfaces. No obstante, también tengo ambición por expandir mis habilidades al backend para ser un desarrollador más completo. Quiero aprender todo lo que pueda mientras pueda, y lo que no supla mi talento, lo hará mi ilusión y voluntad, que de eso tengo cuerda para rato.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
        Mi forma de trabajo apuesta por la creatividad, la atención al detalle y la prioritaria experiencia del usuario, y es que concibo la programación también como un arte. Un arte que eso sí, debe construirse con la disciplina, profesionalidad y compañerismo por encima de todo. 
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
