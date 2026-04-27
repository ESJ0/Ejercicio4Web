require('dotenv').config()
const db = require('./database')

const API_KEY = process.env.API_FOOTBALL_KEY

const posicionMap = {
    'Attacker': 'Delantero',
    'Midfielder': 'Mediocampista',
    'Defender': 'Defensor',
    'Goalkeeper': 'Arquero'
}

async function fetchJugadores() {
    const base = `https://v3.football.api-sports.io/players?team=26&season=2022&league=1`
    const headers = { 'x-apisports-key': API_KEY }

    const res1 = await fetch(`${base}&page=1`, { headers })
    const json1 = await res1.json()

    if (!json1.response || json1.response.length === 0) {
        throw new Error('No se obtuvieron jugadores de la API')
    }

    let jugadores = json1.response

    const totalPages = json1.paging?.total || 1
    for (let page = 2; page <= totalPages; page++) {
        const res = await fetch(`${base}&page=${page}`, { headers })
        const json = await res.json()
        jugadores = [...jugadores, ...json.response]
    }

    return jugadores
}

async function main() {
    console.log('🔄 Obteniendo jugadores del Mundial Qatar 2022...')

    const data = await fetchJugadores()

    db.prepare('DELETE FROM jugadores').run()
    db.prepare("DELETE FROM sqlite_sequence WHERE name='jugadores'").run()

    const insert = db.prepare(`
    INSERT INTO jugadores
      (nombre, apodo, posicion, club, dorsal, edad, altura_cm,
       partidos, goles, asistencias, descripcion, imagen_url)
    VALUES
      (@nombre, @apodo, @posicion, @club, @dorsal, @edad, @altura_cm,
       @partidos, @goles, @asistencias, @descripcion, @imagen_url)
  `)

    const insertMany = db.transaction((jugadores) => {
        for (const j of jugadores) insert.run(j)
    })

    const jugadores = data.map(({ player, statistics }) => {
        const stats = statistics[0] || {}

        const posicion = posicionMap[stats.games?.position] || stats.games?.position || 'N/A'

        return {
            nombre: player.name,
            apodo: player.firstname,
            posicion,
            club: stats.team?.name || 'N/A',
            dorsal: null,
            edad: player.age,
            altura_cm: player.height ? parseInt(player.height) : null,
            partidos: stats.games?.appearences || 0,
            goles: stats.goals?.total || 0,
            asistencias: stats.goals?.assists || 0,
            descripcion: `Jugador de la Selección Argentina en el Mundial Qatar 2022.`,
            imagen_url: player.photo
        }
    })

    insertMany(jugadores)
    console.log(`✅ Se insertaron ${jugadores.length} jugadores del Mundial Qatar 2022.`)
}

main().catch(console.error)