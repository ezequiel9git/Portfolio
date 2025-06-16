import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* Asegura espacio para la navbar fija */}
        <Hero />
        <div className="bg-blue-500 text-white p-4">
          Prueba de Tailwind
        </div>
        <Projects />
        <Technologies />
        <Contact />
      </main>
    </>
  );
}

export default App;

