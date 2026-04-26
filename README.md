# 🇦🇷 Argentina Blog

Mini-blog sobre los jugadores de la Selección Argentina construido con **Vite + React + React Router** en el frontend y **Node.js + Express + SQLite** en el backend.

## Nivel apuntado: Senior ⭐

---

## Checklist de niveles

### Base
- [x] Proyecto generado con `npm create vite@latest`
- [x] `react-router-dom` v7 (compatible con v6 API)
- [x] Mínimo 3 rutas: `/`, `/jugadores`, `/jugadores/:id`
- [x] Datos en base de datos SQLite, no hardcodeados en componentes
- [x] `useParams` en página de detalle
- [x] Navegación con `<Link>`, sin `<a>`
- [x] README con instrucciones para correr el proyecto
- [x] Video en carpeta `/demo`

### Mid
- [x] Página 404 para rutas no encontradas
- [x] Búsqueda y filtro por posición en el listado
- [x] Botón "jugador aleatorio" con `useNavigate`
- [x] Componentes reutilizables con props documentadas

### Senior
- [x] Estado global con Context API (favoritos)
- [x] 3 componentes con PropTypes definidos: `Navbar`, `JugadorCard`, `Buscador`
- [x] Base de datos SQLite con 20 jugadores reales

---

## Tecnologías

- **Frontend:** Vite, React 19, React Router v7, PropTypes
- **Backend:** Node.js, Express 5, better-sqlite3
- **Base de datos:** SQLite
- **Infraestructura:** Docker + Docker Compose

---

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Home con presentación y botón de jugador aleatorio |
| `/jugadores` | Listado con búsqueda por nombre/apodo/club y filtro por posición |
| `/jugadores/:id` | Perfil completo del jugador |
| `/favoritos` | Jugadores guardados (estado global con Context API) |
| `*` | Página 404 |

---

## Correr con Docker (recomendado)

```bash
git clone https://github.com/tu-usuario/argentina-blog.git
cd argentina-blog
docker-compose up --build
```

- Frontend → http://localhost:3000
- Backend  → http://localhost:4000

---

## Correr sin Docker

### Backend

```bash
cd backend
npm install
npm run seed
npm run dev
```

El servidor queda en http://localhost:4000

### Frontend

```bash
cd frontend
npm install
npm run dev
```

La app queda en http://localhost:5173

> Asegurate de tener el archivo `frontend/.env` con el siguiente contenido:
> ```
> VITE_API_URL=http://localhost:4000
> ```

---

## Endpoints del backend

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/jugadores` | Lista todos. Acepta `?q=texto` y `?posicion=Delantero` |
| GET | `/jugadores/random` | Devuelve un jugador aleatorio |
| GET | `/jugadores/:id` | Detalle de un jugador por ID |
| GET | `/health` | Verifica que el servidor está activo |

---

## Componentes reutilizables

### `<Navbar titulo />`

Barra de navegación sticky con links y contador de favoritos en tiempo real.

| Prop | Tipo | Requerida | Descripción |
|---|---|---|---|
| `titulo` | `string` | ✓ | Texto que aparece a la izquierda de la barra |

### `<JugadorCard jugador />`

Tarjeta de jugador con imagen, stats y botón de favorito. Navega al detalle al hacer click.

| Prop | Tipo | Requerida | Descripción |
|---|---|---|---|
| `jugador` | `shape` | ✓ | Objeto jugador proveniente de la API |
| `jugador.id` | `number` | ✓ | Identificador único |
| `jugador.nombre` | `string` | ✓ | Nombre completo |
| `jugador.posicion` | `string` | ✓ | Posición en el campo |
| `jugador.club` | `string` | ✓ | Club actual |
| `jugador.apodo` | `string` | — | Apodo del jugador |
| `jugador.dorsal` | `number` | — | Número de camiseta |
| `jugador.goles` | `number` | — | Goles en la selección |
| `jugador.asistencias` | `number` | — | Asistencias en la selección |
| `jugador.partidos` | `number` | — | Partidos jugados |
| `jugador.imagen_url` | `string` | — | URL de la foto |

### `<Buscador busqueda onBusqueda posicion onPosicion />`

Campo de búsqueda y filtros por posición para el listado.

| Prop | Tipo | Requerida | Descripción |
|---|---|---|---|
| `busqueda` | `string` | ✓ | Texto actual del input |
| `onBusqueda` | `func` | ✓ | Callback al escribir en el input |
| `posicion` | `string` | ✓ | Posición seleccionada (`''` = todas) |
| `onPosicion` | `func` | ✓ | Callback al cambiar posición |

---

## Demo

Ver carpeta [`/demo`](/demo) para el video mostrando las rutas funcionando.