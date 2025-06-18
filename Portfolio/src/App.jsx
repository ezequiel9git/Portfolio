import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Header from './components/Header';
import About from './components/About';


function App() {
  return (
    <>
      
      <main> {/* Asegura espacio para la navbar fija */}
        <Header />
        <Hero />
        <Projects />
        <Technologies />
        <Contact />
      </main>
    </>
  );
}

export default App;

