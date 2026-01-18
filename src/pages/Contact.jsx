import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import './Contact.css'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const servico = searchParams.get('servico')

    if (!servico) return

    const mensagens = {
      'site-institucional':
        'Olá! Tenho interesse em um site institucional para meu negócio.',
      'landing-page':
        'Olá! Quero uma landing page focada em conversão para meu serviço.',
      'negocio-local':
        'Olá! Preciso de um site para meu negócio local.',
      outro:
        'Olá! Gostaria de mais informações sobre desenvolvimento web.'
    }

    setMessage(mensagens[servico] || mensagens.outro)
  }, [searchParams])

  function handleSubmit(e) {
    e.preventDefault()

    if (isSubmitting) return

    setIsSubmitting(true)

    const whatsappMessage = `Olá! Meu nome é ${name}

Email: ${email}

Mensagem:
${message}`

    const encodedMessage = encodeURIComponent(whatsappMessage)

    window.open(
      `https://wa.me/5531996568846?text=${encodedMessage}`,
      '_blank'
    )

    // Reset visual após abrir o WhatsApp
    setTimeout(() => {
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section className="contact-page">
      <div className="container">

        {/* HEADER */}
        <div className="contact-header">
          <span className="eyebrow">CONTATO</span>

          <h1>
            Vamos conversar sobre o seu <span>projeto</span>
          </h1>

          <p>
            Me conte um pouco sobre sua ideia ou negócio e vamos
            encontrar a melhor solução web focada em conversão.
          </p>
        </div>

        {/* CONTEÚDO */}
        <div className="contact-content">

          {/* FORMULÁRIO */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Nome
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              Mensagem
              <textarea
                placeholder="Descreva sua necessidade..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
            </label>

            <button
              type="submit"
              className="btn primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Abrindo WhatsApp…' : 'Enviar mensagem'}
            </button>
          </form>

          {/* WHATSAPP */}
          <div className="contact-whatsapp">
            <h3>Prefere falar direto?</h3>

            <p>
              Entre em contato pelo WhatsApp e vamos conversar
              sobre o seu projeto sem compromisso.
            </p>

            <a
              href="https://wa.me/5531996568462"
              target="_blank"
              className="btn outline"
            >
              Falar no WhatsApp
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
