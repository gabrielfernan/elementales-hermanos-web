import {
  ArrowRight,
  Handshake,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import './Hero.css'

const highlights = [
  {
    label: 'Mantenimiento integral',
    Icon: ShieldCheck,
  },
  {
    label: 'Mano de obra responsable',
    Icon: Handshake,
  },
  {
    label: 'Atención personalizada',
    Icon: Wrench,
  },
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
            Mantenimiento, renovación y soluciones{' '}
            <span>para cada espacio</span>
          </h1>

          <p className="hero__description">
            Servicios integrales para hogares, comercios y empresas en San Juan.
            Trabajo serio, prolijo y a conciencia.
          </p>

          <div className="hero__actions">
            <a className="hero__cta" href="#contacto">
              <MessageCircle size={20} aria-hidden="true" />
              Solicitar presupuesto
            </a>

            <a className="hero__cta-secondary" href="#trabajos">
              Ver nuestros trabajos
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          </div>

          <ul className="hero__highlights">
            {highlights.map(({ label, Icon }) => (
              <li key={label}>
                <span className="hero__highlight-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>

                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          <div className="hero__media-accent" aria-hidden="true" />

          <img
            src="/images/works/hero-jardin-nuevo.png"
            alt="Espacio exterior renovado con jardín, iluminación y sector de vivienda"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero