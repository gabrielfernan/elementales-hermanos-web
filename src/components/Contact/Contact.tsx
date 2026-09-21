import './Contact.css'
import { AtSign, Mail, MapPin, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '5492644041958'
const WHATSAPP_MESSAGE =
  'Hola, me contacto desde la web de Elementales Hermanos. Quisiera consultar por un trabajo y solicitar un presupuesto.'
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="contact__container">
        <header className="contact__header">
          <span className="contact__eyebrow">CONTACTO</span>

          <h2>Contanos qué necesitás, nosotros nos ocupamos del resto</h2>

          <p>
            Escribinos para contarnos sobre el trabajo que necesitás realizar.
            Podés enviarnos fotos del lugar y coordinamos un relevamiento para
            evaluar la mejor solución.
          </p>
        </header>

        <a
          className="contact__cta"
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} strokeWidth={1.8} aria-hidden="true" />
          Consultar por WhatsApp
        </a>

        <ul className="contact__list">
          <li>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__icon" aria-hidden="true">
                <MessageCircle size={24} strokeWidth={1.8} />
              </span>
              <span>
                <span className="contact__label">WhatsApp</span>
                <span className="contact__value">+54 9 2644 04-1958</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/elementales_hnos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__icon" aria-hidden="true">
                <AtSign size={24} strokeWidth={1.8} />
              </span>
              <span>
                <span className="contact__label">Instagram</span>
                <span className="contact__value">@elementales_hnos</span>
              </span>
            </a>
          </li>
          <li>
            <a href="mailto:elementales.hnos@gmail.com">
              <span className="contact__icon" aria-hidden="true">
                <Mail size={24} strokeWidth={1.8} />
              </span>
              <span>
                <span className="contact__label">Email</span>
                <span className="contact__value">elementales.hnos@gmail.com</span>
              </span>
            </a>
          </li>
          <li>
            <div>
              <span className="contact__icon" aria-hidden="true">
                <MapPin size={24} strokeWidth={1.8} />
              </span>
              <span>
                <span className="contact__label">Ubicación</span>
                <span className="contact__value">San Juan, Argentina</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
