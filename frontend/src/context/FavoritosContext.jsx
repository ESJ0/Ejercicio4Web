import { createContext, useContext, useState } from 'react'

const FavoritosContext = createContext()

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([])

  const agregarFavorito = (jugador) => {
    setFavoritos((prev) =>
      prev.find((j) => j.id === jugador.id) ? prev : [...prev, jugador]
    )
  }

  const quitarFavorito = (id) => {
    setFavoritos((prev) => prev.filter((j) => j.id !== id))
  }

  const esFavorito = (id) => favoritos.some((j) => j.id === id)

  return (
    <FavoritosContext.Provider value={{ favoritos, agregarFavorito, quitarFavorito, esFavorito }}>
      {children}
    </FavoritosContext.Provider>
  )
}

export function useFavoritos() {
  return useContext(FavoritosContext)
}