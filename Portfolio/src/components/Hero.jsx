import React from 'react';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white/80 to-blue-50/60 text-center px-4 backdrop-blur-sm">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-700 drop-shadow">
        Hola, soy Ezequiel 👋
      </h2>
      <p className="text-lg sm:text-xl max-w-xl text-gray-800">
        Desarrollador web especializado en JavaScript, React y Node.js. Apasionado por construir soluciones funcionales y atractivas.
      </p>
    </section>
  );
}
