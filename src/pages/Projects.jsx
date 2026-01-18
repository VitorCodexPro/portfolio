import { Link } from 'react-router-dom'
import './Projects.css'

export default function Projects() {
  return (
    <section className="projects-page">
      <div className="container">

        {/* HEADER */}
        <div className="projects-header">
          <h1>
            Projetos & <span>Estudos de Caso</span>
          </h1>

          <p>
            Projetos demonstrativos criados para apresentar soluções reais
            de desenvolvimento web focadas em conversão, performance e
            experiência do usuário.
          </p>
        </div>

        {/* GRID */}
        <div className="projects-grid">

          {/* PROJETO 1 */}
          <div className="project-card">
            <h3>Site Institucional para Consultório Odontológico</h3>

            <p>
              Estudo de caso demonstrativo criado para simular a presença online
              de um consultório odontológico focado em credibilidade e captação
              de pacientes via WhatsApp.
            </p>

            <ul className="project-points">
              <li>Apresentação clara dos serviços</li>
              <li>Design profissional e confiável</li>
              <li>CTA direto para WhatsApp</li>
            </ul>

            <Link to="/contato?servico=site-institucional" className="project-cta">
              Quero um projeto assim
            </Link>

            <span className="tag">Projeto demonstrativo</span>
          </div>

          {/* PROJETO 2 */}
          <div className="project-card">
            <h3>Landing Page de Conversão</h3>

            <p>
              Projeto conceitual de landing page desenvolvida para demonstrar
              estrutura de conversão e direcionamento de visitantes para
              funil de vendas ou atendimento humano.
            </p>

            <ul className="project-points">
              <li>Headline estratégica</li>
              <li>Copy clara e objetiva</li>
              <li>CTA focado em conversão</li>
            </ul>

            <Link to="/contato?servico=landing-page" className="project-cta">
              Quero um projeto assim
            </Link>

            <span className="tag">Estudo de caso</span>
          </div>

          {/* PROJETO 3 */}
          <div className="project-card">
            <h3>Site Profissional para Negócio Local</h3>

            <p>
              Estudo de caso criado para representar a presença digital de um
              negócio local que utiliza o site como ferramenta de captação
              de clientes.
            </p>

            <ul className="project-points">
              <li>Presença online profissional</li>
              <li>Layout responsivo</li>
              <li>Contato facilitado via WhatsApp</li>
            </ul>

            <Link to="/contato?servico=negocio-local" className="project-cta">
              Quero um projeto assim
            </Link>

            <span className="tag">Projeto conceitual</span>
          </div>

        </div>

        {/* NOTA DE TRANSPARÊNCIA */}
        <div className="projects-note">
          <p>
            Os projetos apresentados são estudos de caso demonstrativos,
            criados para ilustrar soluções reais aplicáveis a diferentes
            tipos de negócio.
          </p>
        </div>

        {/* CTA FINAL */}
        <div className="projects-final-cta">
          <h2>Quer um projeto assim para o seu negócio?</h2>

          <p>
            Entre em contato e vamos criar uma solução web focada
            em conversão e resultados reais.
          </p>

          <Link to="/contato" className="btn primary">
            Entrar em contato
          </Link>
        </div>

      </div>
    </section>
  )
}
