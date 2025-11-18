export function Header() {
  return (
    <header className="site-header">
      <div className="container header-grid">
        <div className="logo-wrap">
          <img src="/logo.svg" alt="ManyFlows" className="logo" />
          <img src="/manyflows.svg" alt="ManyFlows Text" className="logo-text" />
        </div>

        <nav className="nav-center">
          <a href="/home" className="nav-link">Inicial</a>
          <a href="#" className="nav-link">Soluções</a>
          <a href="/about" className="nav-link">Sobre Nós</a>
          <a href="/contato" className="nav-link">Contato</a>
        </nav>

        <div className="header-right">
          <a href="/start" className="btn ghost">Começar</a>
        </div>
      </div>
    </header>
  );
}
