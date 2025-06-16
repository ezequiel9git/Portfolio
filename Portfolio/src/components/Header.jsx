export default function Header() {
  return (
    <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Ezequiel.dev</h1>
        <nav className="space-x-4 text-sm font-medium">
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#technologies">Tecnologías</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
