import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  // Travar scroll quando menu abrir
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span>&lt;/&gt;</span> Web com Vitor
        </Link>

        {/* NAV DESKTOP */}
        <nav className="nav-desktop">
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/contato" className="cta">Contato</Link>
        </nav>

        {/* MENU TOGGLE */}
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* NAV MOBILE - OVERLAY ISOLADO */}
      {menuOpen && (
        <div className="nav-mobile">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
          <Link to="/projetos" onClick={closeMenu}>Projetos</Link>
          <Link to="/servicos" onClick={closeMenu}>Serviços</Link>
          <Link to="/contato" className="cta" onClick={closeMenu}>
            Entrar em contato
          </Link>
        </div>
      )}
    </header>
  )
}
