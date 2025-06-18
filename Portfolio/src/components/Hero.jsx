import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import fondoHero from "../assets/FondoHero.png";
import profileImage from "../assets/profile.png";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${fondoHero})` }}
      ref={ref}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* Contenido con animación on scroll */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Imagen de perfil */}
        <motion.img
          src={profileImage}
          alt="Foto de Ezequiel"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-2xl border-4 border-blue-600 object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        />

        {/* Texto */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Hola, soy Ezequiel
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
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
        </div>
      </motion.div>
    </section>
  );
}
