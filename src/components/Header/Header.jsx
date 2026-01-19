import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#home" className="logo">
          <span>&lt;/&gt;</span> Vitor.dev
        </a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato" className="cta">
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}
