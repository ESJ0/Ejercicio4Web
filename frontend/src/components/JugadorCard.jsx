import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useFavoritos } from '../context/FavoritosContext'

export default function JugadorCard({ jugador }) {
  const { esFavorito, agregarFavorito, quitarFavorito } = useFavoritos()
  const favorito = esFavorito(jugador.id)

  const toggleFavorito = (e) => {
    // Evitamos que el click en el botón navegue al detalle
    e.preventDefault()
    favorito ? quitarFavorito(jugador.id) : agregarFavorito(jugador)
  }

  return (
    <Link to={`/jugadores/${jugador.id}`} className="card">
      <img
        src={jugador.imagen_url}
        alt={jugador.nombre}
        className="card__img"
        onError={(e) => { e.target.src = 'https://via.placeholder.com/300x300?text=Sin+foto' }}
      />
      <div className="card__body">
        <span className="card__dorsal">#{jugador.dorsal}</span>
        <h2 className="card__nombre">{jugador.nombre}</h2>
        <p className="card__apodo">{jugador.apodo}</p>
        <span className="card__posicion">{jugador.posicion}</span>
        <p className="card__club">{jugador.club}</p>
        <div className="card__stats">
          <span>⚽ {jugador.goles}</span>
          <span>🎯 {jugador.asistencias}</span>
          <span>🏟 {jugador.partidos}</span>
        </div>
        <button
          onClick={toggleFavorito}
          className={`card__fav ${favorito ? 'card__fav--activo' : ''}`}
        >
          {favorito ? '★ Guardado' : '☆ Favorito'}
        </button>
      </div>
    </Link>
  )
}

JugadorCard.propTypes = {
  /** Objeto jugador proveniente de la API */
  jugador: PropTypes.shape({
    id:          PropTypes.number.isRequired,
    nombre:      PropTypes.string.isRequired,
    apodo:       PropTypes.string,
    posicion:    PropTypes.string.isRequired,
    club:        PropTypes.string.isRequired,
    dorsal:      PropTypes.number,
    goles:       PropTypes.number,
    asistencias: PropTypes.number,
    partidos:    PropTypes.number,
    imagen_url:  PropTypes.string,
  }).isRequired,
}