import './services.css'
import {
    Leaf,
    BrickWall,
    PanelsTopLeft,
    Hammer,
    Paintbrush,
    Wrench,
} from 'lucide-react'

const services = [
    {
        title: 'Jardinería integral',
        description: 'Mantenimiento, poda y cuidado de espacios verdes.',
        icon: Leaf,
    },
    {
        title: 'Albañilería',
        description: 'Reparaciones, mejoras y trabajos generales de albañilería.',
        icon: BrickWall,
    },
    {
        title: 'Durlock',
        description:
            'Soluciones en construcción en seco, divisiones y terminaciones.',
        icon: PanelsTopLeft,
    },
    {
        title: 'Carpintería',
        description: 'Trabajos de armado, reparación y soluciones en madera.',
        icon: Hammer,
    },
    {
        title: 'Decoración y restauración',
        description: 'Renovación y recuperación de espacios y elementos.',
        icon: Paintbrush,
    },
    {
        title: 'Mantenimiento general',
        description:
            'Soluciones para las distintas necesidades de hogares y comercios.',
        icon: Wrench,
    },
]

function Services() {
    return (
        <section className="services" id="servicios">
            <div className="services__container">
                <div className="services__header">
                    <span className="services__eyebrow">NUESTROS SERVICIOS</span>

                    <h2>Soluciones para mantener, renovar y mejorar tus espacios</h2>

                    <p>
                        Brindamos servicios de mantenimiento integral para hogares,
                        comercios y empresas, adaptándonos a las necesidades de cada
                        espacio.
                    </p>
                </div>

                <div className="services__grid">
                    {services.map((service) => {
                        const Icon = service.icon

                        return (
                            <article className="services__card" key={service.title}>
                                <div className="services__icon" aria-hidden="true">
                                    <Icon size={24} strokeWidth={1.8} />
                                </div>

                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services