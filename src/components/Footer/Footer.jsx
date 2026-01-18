import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          © {year} <strong>Vitor</strong> — Desenvolvimento Web focado em conversão.
        </p>

        <span>
          Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}
