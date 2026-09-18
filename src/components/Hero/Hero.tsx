import './Hero.css'

const highlights = [
  'Mantenimiento integral',
  'Mano de obra responsable',
  'Atención personalizada',
] as const

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            MANTENIMIENTO · RENOVACIÓN · RESTAURACIÓN
          </p>
          <h1 id="hero-title">
            Mantenimiento, renovación y soluciones para cada espacio
          </h1>
          <p className="hero__description">
            Servicios integrales para hogares, comercios y empresas en San Juan.
            Trabajo serio, prolijo y a conciencia.
          </p>

          <div className="hero__actions">
            <a className="hero__cta" href="#contacto">
              Solicitar presupuesto
            </a>
            <a className="hero__cta-secondary" href="#trabajos">
              Ver nuestros trabajos
            </a>
          </div>

          <ul className="hero__highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          <img
            src="/images/hero-jardin.jpg"
            alt="Patio con césped recién colocado, mesas de madera y bordes de concreto, trabajo de jardinería de Elementales Hermanos"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
