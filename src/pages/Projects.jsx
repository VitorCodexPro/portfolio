import './Projects.css'

// Links WhatsApp com mensagens específicas por serviço
const WHATSAPP_BASE = "https://wa.me/5531996568846?text="

const WHATSAPP_LINKS = {
  institucional: WHATSAPP_BASE + encodeURIComponent(`Olá Vitor! Vi o projeto de Site Institucional no seu site e tenho interesse em algo similar para meu negócio.

Tipo de negócio:
Objetivo do site:
Forma de contato com clientes:`),
  
  landing: WHATSAPP_BASE + encodeURIComponent(`Olá Vitor! Vi o projeto de Landing Page no seu site e quero uma página focada em conversão.

Tipo de negócio:
Objetivo da página:
Forma de contato com clientes:`),
  
  local: WHATSAPP_BASE + encodeURIComponent(`Olá Vitor! Vi o projeto para Negócio Local no seu site e preciso de um site para minha empresa.

Tipo de negócio:
Objetivo do site:
Forma de contato com clientes:`),
  
  geral: WHATSAPP_BASE + encodeURIComponent(`Olá Vitor! Vi seu site e gostaria de saber mais sobre a criação de um site para meu negócio.

Tipo de negócio:
Objetivo do site:
Forma de contato com clientes:`)
}

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

            <a 
              href={WHATSAPP_LINKS.institucional}
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta"
            >
              Quero um projeto assim
            </a>

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

            <a 
              href={WHATSAPP_LINKS.landing}
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta"
            >
              Quero um projeto assim
            </a>

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

            <a 
              href={WHATSAPP_LINKS.local}
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta"
            >
              Quero um projeto assim
            </a>

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
            Me conte rapidamente sobre seu negócio e vamos criar uma solução
            web focada em conversão e resultados reais.
          </p>

          <a 
            href={WHATSAPP_LINKS.geral}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Falar no WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}
