import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FavoritosProvider } from './context/FavoritosContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Jugadores from './pages/Jugadores'
import Detalle from './pages/Detalle'
import Favoritos from './pages/Favoritos'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <FavoritosProvider>
      <BrowserRouter>
        <Navbar titulo="🇦🇷 Albiceleste" />
        <Routes>
          <Route path="/"               element={<Home />}      />
          <Route path="/jugadores"      element={<Jugadores />} />
          <Route path="/jugadores/:id"  element={<Detalle />}   />
          <Route path="/favoritos"      element={<Favoritos />} />
          <Route path="*"               element={<NotFound />}  />
        </Routes>
      </BrowserRouter>
    </FavoritosProvider>
  )
}