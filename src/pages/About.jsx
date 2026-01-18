import './About.css'
import sobreImg from '../assets/images/sobre.jpeg'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* TEXTO */}
        <div className="about-text text-reveal">
          <h1>
            Sobre <span>mim</span>
          </h1>

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

        {/* IMAGEM */}
        <div className="about-image slide-in">
          <img
            src={sobreImg}
            alt="Vitor, desenvolvedor web"
          />
        </div>
      </div>
    </section>
  )
}
