import { useState, useEffect } from 'react'
import './Home.css'
import foto from '../assets/images/foto.png'
import sobreImg from '../assets/images/sobre.jpeg'

// Link WhatsApp com mensagem pré-preenchida
const WHATSAPP_LINK = "https://wa.me/5531996568462?text=Olá%20Vitor!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20criação%20de%20um%20site%20para%20meu%20negócio.%0A%0ATipo%20de%20negócio:%0AObjetivo%20do%20site:%0AForma%20de%20contato%20com%20clientes:"

// Links WhatsApp com mensagens específicas por serviço
const WHATSAPP_BASE = "https://wa.me/5531996568462?text="

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

export default function Home() {
  const [activeModal, setActiveModal] = useState(null)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-image slide-in">
            <img src={foto} alt="Foto de Vitor, desenvolvedor web" />
          </div>

          <div className="hero-text text-reveal">
            <h1>
              Desenvolvedor Web <span>Fullstack</span>
            </h1>

            <p>
              Crio sites e sistemas web modernos, rápidos e escaláveis usando
              JavaScript, HTML, CSS, TypeScript, React, Next.js e boas
              práticas de engenharia.
            </p>

            <div className="hero-actions">
              <a href="#projetos" className="btn primary">
                Ver projetos
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SOBRE ==================== */}
      <section id="sobre" className="about">
        <div className="about-container">
          <div className="about-text text-reveal">
            <h2>
              Sobre <span>mim</span>
            </h2>

            <p>
              Meu nome é Vitor e estudo programação desde a infância, movido por
              curiosidade e interesse genuíno em tecnologia. Escrevi minha primeira
              linha de código entre 2014 e 2015, aprendendo de forma autodidata por
              meio de cursos e conteúdos online.
            </p>

            <p>
              Atualmente curso <strong>Engenharia de Software</strong> em Belo
              Horizonte, na faculdade <strong>Wyden</strong>, e sigo aprofundando
              meus conhecimentos diariamente.
            </p>

            <p>
              Hoje meu foco é o desenvolvimento de sites e interfaces web, criando
              soluções para consultórios odontológicos, escritórios de advocacia e
              páginas de vendas integradas a funis de conversão.
            </p>

            <p>
              Minha especialidade está no <strong>Front-End</strong>, utilizando
              HTML, CSS, JavaScript, TypeScript, React e Next.js. Também possuo
              conhecimentos em Python.
            </p>

            <p className="about-highlight">
              Estou em constante evolução e aberto a novos projetos e clientes,
              sempre com foco em performance, clareza e resultados reais.
            </p>
          </div>

          <div className="about-image slide-in">
            <img src={sobreImg} alt="Vitor, desenvolvedor web" />
          </div>
        </div>
      </section>

      {/* ==================== SERVIÇOS ==================== */}
      <section id="servicos" className="home-services">
        <div className="container">
          <div className="services-header fade-up">
            <span className="services-eyebrow">
              SOLUÇÕES DIGITAIS PARA NEGÓCIOS
            </span>

            <h2>
              Leve sua presença online para o <span>próximo nível</span>
            </h2>

            <p>
              Desenvolvimento de sites modernos, rápidos e estratégicos,
              focados em atrair clientes e aumentar suas conversões.
            </p>
          </div>

          <div className="services-cards">
            <div className="service-card fade-up delay-1">
              <h3>Sites Profissionais</h3>
              <p>
                Criação de sites institucionais modernos para consultórios,
                escritórios e negócios que precisam transmitir credibilidade
                e profissionalismo.
              </p>
              <button onClick={() => setActiveModal('sites')}>Ver solução</button>
            </div>

            <div className="service-card featured fade-up delay-2">
              <h3>Conversão de Clientes</h3>
              <p>
                Páginas de vendas e landing pages pensadas para direcionar
                visitantes ao WhatsApp ou funil de captação do seu negócio.
              </p>
              <button onClick={() => setActiveModal('conversao')}>Ver solução</button>
            </div>

            <div className="service-card fade-up delay-3">
              <h3>Performance & Experiência</h3>
              <p>
                Sites rápidos, responsivos e otimizados para oferecer
                uma experiência fluida em qualquer dispositivo.
              </p>
              <button onClick={() => setActiveModal('performance')}>Ver solução</button>
            </div>
          </div>

          {/* COMO FUNCIONA */}
          <div className="process-section fade-up">
            <h3>Como funciona o processo</h3>
            <ol className="process-list">
              <li>
                <strong>Entendimento da necessidade</strong>
                <span>Análise do seu negócio e objetivos</span>
              </li>
              <li>
                <strong>Definição da melhor solução</strong>
                <span>Estratégia clara e alinhada ao seu público</span>
              </li>
              <li>
                <strong>Desenvolvimento e validações</strong>
                <span>Construção com feedbacks rápidos</span>
              </li>
              <li>
                <strong>Entrega e suporte inicial</strong>
                <span>Site pronto para uso e conversão</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ==================== PROJETOS ==================== */}
      <section id="projetos" className="projects-section">
        <div className="container">
          <div className="projects-header fade-up">
            <h2>
              Projetos & <span>Estudos de Caso</span>
            </h2>

            <p>
              Projetos demonstrativos criados para apresentar soluções reais
              de desenvolvimento web focadas em conversão, performance e
              experiência do usuário.
            </p>
          </div>

          <div className="projects-grid">
            <article className="project-card fade-up delay-1">
              <div className="project-content">
                <span className="project-tag">Projeto demonstrativo</span>
                <h3>Site Institucional</h3>

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
              </div>

              <a 
                href={WHATSAPP_LINKS.institucional}
                target="_blank"
                rel="noopener noreferrer"
                className="project-cta"
              >
                Quero um projeto assim
              </a>
            </article>

            <article className="project-card fade-up delay-2">
              <div className="project-content">
                <span className="project-tag">Estudo de caso</span>
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
              </div>

              <a 
                href={WHATSAPP_LINKS.landing}
                target="_blank"
                rel="noopener noreferrer"
                className="project-cta"
              >
                Quero um projeto assim
              </a>
            </article>

            <article className="project-card fade-up delay-3">
              <div className="project-content">
                <span className="project-tag">Projeto conceitual</span>
                <h3>Site para Negócio Local</h3>

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
              </div>

              <a 
                href={WHATSAPP_LINKS.local}
                target="_blank"
                rel="noopener noreferrer"
                className="project-cta"
              >
                Quero um projeto assim
              </a>
            </article>
          </div>

          <div className="projects-note fade-up">
            <p>
              Os projetos apresentados são estudos de caso demonstrativos,
              criados para ilustrar soluções reais aplicáveis a diferentes
              tipos de negócio.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CTA FINAL ==================== */}
      <section id="contato" className="final-cta">
        <div className="container">
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
      </section>

      {/* ==================== MODAL ==================== */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setActiveModal(null)}>
              ✕
            </button>

            {activeModal === 'sites' && (
              <>
                <h3>Sites Profissionais</h3>
                <p>
                  Desenvolvimento de sites institucionais modernos, pensados para
                  transmitir credibilidade, profissionalismo e confiança.
                </p>
                <ul>
                  <li>Design moderno e responsivo</li>
                  <li>Estrutura clara e objetiva</li>
                  <li>Identidade visual alinhada ao negócio</li>
                  <li>Facilidade de contato com o cliente</li>
                </ul>
              </>
            )}

            {activeModal === 'conversao' && (
              <>
                <h3>Conversão de Clientes</h3>
                <p>
                  Criação de landing pages e páginas de vendas focadas em transformar
                  visitantes em contatos reais.
                </p>
                <ul>
                  <li>CTA estratégico (WhatsApp, formulário, funil)</li>
                  <li>Copy clara e objetiva</li>
                  <li>Layout focado em conversão</li>
                  <li>Integração com ferramentas de captação</li>
                </ul>
              </>
            )}

            {activeModal === 'performance' && (
              <>
                <h3>Performance & Experiência</h3>
                <p>
                  Sites rápidos, leves e otimizados para oferecer a melhor experiência
                  em qualquer dispositivo.
                </p>
                <ul>
                  <li>Carregamento rápido</li>
                  <li>Experiência fluida no mobile</li>
                  <li>Boas práticas de performance</li>
                  <li>SEO técnico básico</li>
                </ul>
              </>
            )}
          </div>
        </div>
      )}

      {/* ==================== BACK TO TOP ==================== */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        ↑
      </button>
    </>
  )
}
