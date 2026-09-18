import { useState } from 'react'
import './Header.css'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
] as const

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function toggleMenu() {
    setIsMenuOpen((open) => !open)
  }

  return (
    <header className="header">
      <div className="header__inner">
        <a
          className="header__logo"
          href="#inicio"
          aria-label="Elementales Hermanos"
          onClick={closeMenu}
        >
          <img
            src="/images/logo-original-horizontal.jpeg"
            alt="Elementales Hermanos"
          />
        </a>

        <button
          className="header__menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="menu-principal"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={toggleMenu}
        >
          <span className="header__menu-icon" aria-hidden="true" />
        </button>

        <nav
          id="menu-principal"
          className={`header__nav${isMenuOpen ? ' header__nav--open' : ''}`}
          aria-label="Principal"
        >
          <ul className="header__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="header__link" href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="header__cta" href="#contacto" onClick={closeMenu}>
            Solicitar presupuesto
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
