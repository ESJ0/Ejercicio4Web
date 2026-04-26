import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useFavoritos } from '../context/FavoritosContext'

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export default function Detalle() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { esFavorito, agregarFavorito, quitarFavorito } = useFavoritos()

  const [jugador, setJugador] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setCargando(true)
    fetch(`${API}/jugadores/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Jugador no encontrado')
        return res.json()
      })
      .then((data) => { setJugador(data); setCargando(false) })
      .catch((e) => { setError(e.message); setCargando(false) })
  }, [id])

  if (cargando) return <p className="estado">Cargando...</p>
  if (error)    return <p className="estado estado--error">{error}</p>
  if (!jugador) return null

  const favorito = esFavorito(jugador.id)

  return (
    <main className="detalle">
      <button onClick={() => navigate(-1)} className="detalle__volver">← Volver</button>

      <div className="detalle__card">
        <img
          src={jugador.imagen_url}
          alt={jugador.nombre}
          className="detalle__img"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/400x400?text=Sin+foto' }}
        />

        <div className="detalle__info">
          <p className="detalle__dorsal">#{jugador.dorsal}</p>
          <h1 className="detalle__nombre">{jugador.nombre}</h1>
          {jugador.apodo && <p className="detalle__apodo">"{jugador.apodo}"</p>}
          <span className="detalle__posicion">{jugador.posicion}</span>

          <p className="detalle__club">🏟 {jugador.club}</p>
          <p className="detalle__dato">📅 {jugador.edad} años &nbsp;|&nbsp; 📏 {jugador.altura_cm} cm</p>

          <div className="detalle__stats">
            <div className="stat">
              <span className="stat__valor">{jugador.partidos}</span>
              <span className="stat__label">Partidos</span>
            </div>
            <div className="stat">
              <span className="stat__valor">{jugador.goles}</span>
              <span className="stat__label">Goles</span>
            </div>
            <div className="stat">
              <span className="stat__valor">{jugador.asistencias}</span>
              <span className="stat__label">Asistencias</span>
            </div>
          </div>

          <p className="detalle__descripcion">{jugador.descripcion}</p>

          <button
            onClick={() => favorito ? quitarFavorito(jugador.id) : agregarFavorito(jugador)}
            className={`btn ${favorito ? 'btn--secundario' : 'btn--primario'}`}
          >
            {favorito ? '★ Quitar de favoritos' : '☆ Agregar a favoritos'}
          </button>
        </div>
      </div>
    </main>
  )
}