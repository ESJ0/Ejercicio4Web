import { useFavoritos } from '../context/FavoritosContext'
import JugadorCard from '../components/JugadorCard'
import { Link } from 'react-router-dom'

export default function Favoritos() {
  const { favoritos } = useFavoritos()

  if (favoritos.length === 0) {
    return (
      <main className="favoritos">
        <h1 className="jugadores__titulo">Mis Favoritos</h1>
        <p className="estado">
          Todavía no guardaste ningún jugador.{' '}
          <Link to="/jugadores">Explorar plantel →</Link>
        </p>
      </main>
    )
  }

  return (
    <main className="favoritos">
      <h1 className="jugadores__titulo">Mis Favoritos ({favoritos.length})</h1>
      <div className="jugadores__grid">
        {favoritos.map((j) => (
          <JugadorCard key={j.id} jugador={j} />
        ))}
      </div>
    </main>
  )
}