import './ProjectCard.css'

function ProjectCard({ title, description, image, link }) {
  return (
    <article className="project-card">
      <figure className="project-card__image">
        {/* Imagem do projeto */}
      </figure>
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <a href={link} className="project-card__link">
          {/* Link do projeto */}
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
