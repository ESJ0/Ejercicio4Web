import { useNavigate } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export default function Home() {
  const navigate = useNavigate()

  const irAleatorio = async () => {
    try {
      const res = await fetch(`${API}/jugadores/random`)
      const jugador = await res.json()
      navigate(`/jugadores/${jugador.id}`)
    } catch {
      alert('No se pudo obtener un jugador aleatorio.')
    }
  }

  return (
    <main className="home">
      <div className="home__hero">
        <h1 className="home__titulo">Selección Argentina</h1>
        <p className="home__subtitulo">
          Conocé a los jugadores que llevaron a Argentina a lo más alto del fútbol mundial.
        </p>
        <div className="home__acciones">
          <button onClick={() => navigate('/jugadores')} className="btn btn--primario">
            Ver todos los jugadores
          </button>
          <button onClick={irAleatorio} className="btn btn--secundario">
            🎲 Jugador aleatorio
          </button>
        </div>
      </div>
    </main>
  )
}