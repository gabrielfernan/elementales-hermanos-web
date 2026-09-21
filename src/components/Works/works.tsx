import './Works.css'

const works = [
  {
    category: 'Jardinería',
    title: 'Parquización y trasplante',
    image: '/images/works/jardineria7.jpeg',
    className: 'works__item--large',
  },
  {
    category: 'Durlock',
    title: 'Construcción en seco',
    image: '/images/works/durlock1.jpeg',
    className: '',
  },
  {
    category: 'Decoración',
    title: 'Carpintería y montaje',
    image: '/images/works/decoracion.jpeg',
    className: '',
  },
  {
    category: 'Exteriores',
    title: 'Renovación de espacios',
    image: '/images/works/exteriorD.jpeg',
    className: 'works__item--large',
  },
]

function Works() {
  return (
    <section className="works" id="trabajos">
      <div className="works__container">
        <header className="works__header">
          <span className="works__eyebrow">NUESTROS TRABAJOS</span>

          <h2>Resultados que hablan por nuestro trabajo</h2>

          <p>
            Conocé algunos de los trabajos realizados por Elementales Hermanos
            en mantenimiento, renovación y mejora de espacios.
          </p>
        </header>

        <div className="works__grid">
          {works.map((work) => (
            <article
              className={`works__item ${work.className}`}
              key={work.title}
            >
              <img
                src={work.image}
                alt={work.title}
                className="works__image"
                loading="lazy"
              />

              <div className="works__overlay">
                <span>{work.category}</span>
                <h3>{work.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works