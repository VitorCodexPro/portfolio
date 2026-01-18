import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span>&lt;/&gt;</span> Web com Vitor
        </Link>

        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
          <Link to="/projetos" onClick={closeMenu}>Projetos</Link>
          <Link to="/servicos" onClick={closeMenu}>Serviços</Link>
          <Link to="/contato" className="cta" onClick={closeMenu}>
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}
