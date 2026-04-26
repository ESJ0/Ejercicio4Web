import { useEffect, useState } from 'react'
import JugadorCard from '../components/JugadorCard'
import Buscador from '../components/Buscador'

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export default function Jugadores() {
  const [jugadores, setJugadores] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [posicion, setPosicion] = useState('')
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const params = new URLSearchParams()
    if (busqueda) params.append('q', busqueda)
    if (posicion) params.append('posicion', posicion)

    setCargando(true)
    fetch(`${API}/jugadores?${params}`)
      .then((res) => res.json())
      .then((data) => { setJugadores(data); setCargando(false) })
      .catch(() => { setError('Error al cargar jugadores.'); setCargando(false) })
  }, [busqueda, posicion])

  return (
    <main className="jugadores">
      <h1 className="jugadores__titulo">Plantel</h1>

      <Buscador
        busqueda={busqueda}
        onBusqueda={setBusqueda}
        posicion={posicion}
        onPosicion={setPosicion}
      />

      {cargando && <p className="estado">Cargando...</p>}
      {error   && <p className="estado estado--error">{error}</p>}

      {!cargando && !error && jugadores.length === 0 && (
        <p className="estado">No se encontraron jugadores.</p>
      )}

      <div className="jugadores__grid">
        {jugadores.map((j) => (
          <JugadorCard key={j.id} jugador={j} />
        ))}
      </div>
    </main>
  )
}