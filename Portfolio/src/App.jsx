import './index.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {
  return (
    <main className="font-sans">
      <Hero />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  );
}

export default App;

