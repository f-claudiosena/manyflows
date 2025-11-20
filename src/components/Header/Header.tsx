import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-grid">
        <div className="logo-wrap">
          <img src="/logo.svg" alt="ManyFlows" className="logo" />
          <img src="/manyflows.svg" alt="ManyFlows Text" className="logo-text" />
        </div>

        <nav className="nav-center">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Inicial</NavLink>
          <NavLink to="/solutions" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Soluções</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Sobre Nós</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contato</NavLink>
        </nav>

        <div className="header-right">
          <NavLink to="/start" className="btn ghost">Começar</NavLink>
        </div>
      </div>
    </header>
  );
}
