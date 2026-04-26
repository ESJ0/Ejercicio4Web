import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { useFavoritos } from '../context/FavoritosContext'

export default function Navbar({ titulo }) {
  const { favoritos } = useFavoritos()
  const { pathname } = useLocation()

  const links = [
    { to: '/',           label: 'Inicio'    },
    { to: '/jugadores',  label: 'Jugadores' },
    { to: '/favoritos',  label: `Favoritos (${favoritos.length})` },
  ]

  return (
    <nav className="navbar">
      <span className="navbar__titulo">{titulo}</span>
      <ul className="navbar__links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={pathname === to ? 'navbar__link navbar__link--active' : 'navbar__link'}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  /** Título que aparece a la izquierda de la barra de navegación */
  titulo: PropTypes.string.isRequired,
}