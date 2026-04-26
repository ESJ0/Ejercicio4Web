import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="notfound">
      <h1 className="notfound__codigo">404</h1>
      <p className="notfound__mensaje">Esta página no existe.</p>
      <Link to="/" className="btn btn--primario">Volver al inicio</Link>
    </main>
  )
}