import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import foto from '../assets/images/foto.png'

// Link WhatsApp com mensagem pré-preenchida
const WHATSAPP_LINK = "https://wa.me/5531996568846?text=Olá%20Vitor!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20criação%20de%20um%20site%20para%20meu%20negócio.%0A%0ATipo%20de%20negócio:%0AObjetivo%20do%20site:%0AForma%20de%20contato%20com%20clientes:"

export default function Home() {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <>
      <section className="home-services">
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
        </div>
      </section>

      <section id="home" className="hero">
        <div className="container hero-container">
          {/* TEXTO */}
          <div className="hero-text text-reveal">
            <h1>
              Desenvolvedor Web <span>Fullstack</span>
            </h1>

            <p>
              Crio sites e sistemas web modernos, rápidos e escaláveis usando
              JavaScript, HTML, CSS, JavaScript, TypeScript, React, Next.js e boas
              práticas de engenharia.
            </p>

            <div className="hero-actions">
              <Link to="/projetos" className="btn primary">
                Ver projetos
              </Link>
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

          {/* IMAGEM */}
          <div className="hero-image slide-in">
            <img src={foto} alt="Foto de Vitor, desenvolvedor web" />
          </div>
        </div>
      </section>

      {/* MODAL */}
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
    </>
  )
}
