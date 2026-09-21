import './About.css'

const values = [
  'Trabajo prolijo',
  'Atención personalizada',
  'Soluciones integrales',
] as const

function About() {
  return (
    <section className="about" id="nosotros">
      <div className="about__container">
        <header className="about__header">
          <span className="about__eyebrow">SOBRE NOSOTROS</span>

          <h2>Soluciones integrales, trabajo responsable</h2>

          <p>
            En Elementales Hermanos nos dedicamos al mantenimiento, renovación y
            mejora de hogares, comercios y espacios de trabajo en San Juan.
          </p>

          <p>
            Abordamos cada proyecto de manera personalizada, buscando soluciones
            prácticas y cuidando cada etapa del trabajo, desde el relevamiento
            inicial hasta la terminación.
          </p>
        </header>

        <ul className="about__values">
          {values.map((value) => (
            <li className="about__value" key={value}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
