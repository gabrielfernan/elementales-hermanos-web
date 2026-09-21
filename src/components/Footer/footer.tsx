import './footer.css'
import { AtSign, Mail, MapPin, MessageCircle } from 'lucide-react'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <p className="footer__name">Elementales Hermanos</p>
          <p>Servicios de mantenimiento integral</p>
          <p>
            <MapPin size={16} strokeWidth={1.8} aria-hidden="true" />
            San Juan, Argentina
          </p>
        </div>

        <ul className="footer__links">
          <li>
            <a
              href="https://www.instagram.com/elementales_hnos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AtSign size={16} strokeWidth={1.8} aria-hidden="true" />
              Instagram
            </a>
          </li>
          <li>
            <a href="mailto:elementales.hnos@gmail.com">
              <Mail size={16} strokeWidth={1.8} aria-hidden="true" />
              Email
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5492644041958"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} strokeWidth={1.8} aria-hidden="true" />
              WhatsApp
            </a>
          </li>
        </ul>
      </div>

      <p className="footer__copy">
        © {currentYear} Elementales Hermanos
      </p>
    </footer>
  )
}

export default Footer
