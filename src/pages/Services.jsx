import './Services.css'

// Link WhatsApp com mensagem pré-preenchida
const WHATSAPP_LINK = "https://wa.me/5531996568462?text=Olá%20Vitor!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20criação%20de%20um%20site%20para%20meu%20negócio.%0A%0ATipo%20de%20negócio:%0AObjetivo%20do%20site:%0AForma%20de%20contato%20com%20clientes:"

export default function Services() {
  return (
    <section className="services-page">
      <div className="container">

        {/* HERO */}
        <div className="services-hero">
          <span className="eyebrow">SERVIÇOS</span>

          <h1>
            Sites que geram <span>clientes</span>, não só visitas
          </h1>

          <p>
            Desenvolvimento web focado em credibilidade, conversão e resultados
            reais para negócios que querem crescer no digital.
          </p>

          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Solicitar orçamento
          </a>
        </div>

        {/* SERVIÇOS */}
        <div className="services-grid">
          <div className="service-card">
            <h3>Sites Profissionais</h3>
            <p>
              Para consultórios, escritórios e negócios que precisam transmitir
              confiança e profissionalismo.
            </p>

            <ul>
              <li>Site institucional moderno</li>
              <li>Design profissional e responsivo</li>
              <li>Estrutura clara e objetiva</li>
              <li>Integração com WhatsApp ou formulário</li>
            </ul>

            <span className="result">
              Resultado: mais credibilidade e contatos qualificados
            </span>
          </div>

          <div className="service-card highlight">
            <h3>Páginas de Conversão</h3>
            <p>
              Páginas pensadas para transformar visitantes em contatos reais.
            </p>

            <ul>
              <li>Landing page focada em conversão</li>
              <li>Copy clara e objetiva</li>
              <li>CTA estratégico</li>
              <li>Estrutura pensada para vendas</li>
            </ul>

            <span className="result">
              Resultado: mais leads e oportunidades de venda
            </span>
          </div>

          <div className="service-card">
            <h3>Performance & Experiência</h3>
            <p>
              Para quem não quer site lento, quebrado ou mal visto no Google.
            </p>

            <ul>
              <li>Site rápido e otimizado</li>
              <li>Responsividade total</li>
              <li>Boas práticas de SEO técnico</li>
              <li>Experiência fluida para o usuário</li>
            </ul>

            <span className="result">
              Resultado: melhor desempenho e retenção de usuários
            </span>
          </div>
        </div>

        {/* CTA INTERMEDIÁRIO */}
        <div className="services-cta">
          <p>Pronto para aplicar isso no seu negócio?</p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
          >
            Solicitar orçamento
          </a>
        </div>

        {/* BLOCO FINAL */}
        <div className="services-bottom">

          <div className="services-info">

            <div className="process-card">
              <h2>Como funciona o processo</h2>

              <ol>
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

            <div className="target-card">
              <h2>Para quem é esse serviço?</h2>

              <p className="target-description">
                Ideal para negócios que utilizam o site como ferramenta de apresentação
                e captação, direcionando o cliente para atendimento via WhatsApp,
                formulário ou outro funil de vendas.
              </p>

              <ul>
                <li>Consultórios odontológicos e clínicas</li>
                <li>Escritórios de advocacia</li>
                <li>Profissionais liberais e autônomos</li>
                <li>Negócios locais e prestadores de serviço</li>
                <li>Empresas que vendem via WhatsApp</li>
                <li>Negócios que utilizam funil de atendimento humano</li>
                <li>Empresas que não realizam pagamentos diretamente no site</li>
              </ul>
            </div>

          </div>

          <div className="services-final-cta">
            <h2>Vamos tirar seu projeto do papel?</h2>
            <p>
              Me conte rapidamente sobre seu negócio e eu te explico a melhor solução.
            </p>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              Falar no WhatsApp
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
