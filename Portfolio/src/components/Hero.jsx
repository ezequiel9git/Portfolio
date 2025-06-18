import React from 'react';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h2 className="text-5xl font-bold mb-4">Hola, soy Ezequiel 👋</h2>
      <p className="text-xl max-w-xl text-gray-300">
        Desarrollador web especializado en JavaScript, React y Node.js. Apasionado por construir soluciones funcionales y atractivas.
      </p>
    </section>
  );
}
