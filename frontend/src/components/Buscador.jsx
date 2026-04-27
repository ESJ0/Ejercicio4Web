import PropTypes from 'prop-types'

const POSICIONES = ['Todas', 'Arquero', 'Defensor', 'Mediocampista', 'Extremo', 'Delantero']

export default function Buscador({ busqueda, onBusqueda, posicion, onPosicion }) {
  return (
    <div className="buscador">
      <input
        type="text"
        placeholder="Buscar por nombre o apellido..."
        value={busqueda}
        onChange={(e) => onBusqueda(e.target.value)}
        className="buscador__input"
      />
      <div className="buscador__filtros">
        {POSICIONES.map((pos) => (
          <button
            key={pos}
            onClick={() => onPosicion(pos === 'Todas' ? '' : pos)}
            className={`buscador__btn ${(pos === 'Todas' ? '' : pos) === posicion ? 'buscador__btn--activo' : ''}`}
          >
            {pos}
          </button>
        ))}
      </div>
    </div>
  )
}

Buscador.propTypes = {
  /** Texto actual de búsqueda */
  busqueda:   PropTypes.string.isRequired,
  /** Callback cuando cambia el texto */
  onBusqueda: PropTypes.func.isRequired,
  /** Posición actualmente seleccionada ('', 'Delantero', etc.) */
  posicion:   PropTypes.string.isRequired,
  /** Callback cuando cambia la posición */
  onPosicion: PropTypes.func.isRequired,
}