import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <span>&lt;/&gt;</span> Vitor.dev
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/contato" className="cta">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}
