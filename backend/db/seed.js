const db = require('./database');

db.prepare('DELETE FROM jugadores').run();
db.prepare("DELETE FROM sqlite_sequence WHERE name='jugadores'").run();

const jugadores = [{
        nombre: 'Lionel Messi',
        apodo: 'La Pulga',
        posicion: 'Delantero',
        club: 'Inter Miami CF',
        dorsal: 10,
        edad: 37,
        altura_cm: 170,
        partidos: 188,
        goles: 109,
        asistencias: 56,
        descripcion: 'El mejor jugador de la historia. Campeón del mundo en Qatar 2022 y ganador de 8 Balones de Oro.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg'
    },
    {
        nombre: 'Emiliano Martínez',
        apodo: 'Dibu',
        posicion: 'Arquero',
        club: 'Aston Villa',
        dorsal: 23,
        edad: 31,
        altura_cm: 195,
        partidos: 62,
        goles: 0,
        asistencias: 0,
        descripcion: 'Arquero fundamental en la Copa América 2021 y el Mundial 2022. Conocido por su carisma y sus atajadas en penales.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Emiliano_Martinez_2022.jpg'
    },
    {
        nombre: 'Ángel Di María',
        apodo: 'Fideo',
        posicion: 'Extremo',
        club: 'Benfica',
        dorsal: 11,
        edad: 36,
        altura_cm: 180,
        partidos: 145,
        goles: 31,
        asistencias: 32,
        descripcion: 'Pieza clave en todos los títulos recientes de Argentina. Anotó el segundo gol en la final del Mundial de Qatar.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Angel_Di_Maria_2017.jpg'
    },
    {
        nombre: 'Julián Álvarez',
        apodo: 'La Araña',
        posicion: 'Delantero',
        club: 'Atlético de Madrid',
        dorsal: 9,
        edad: 24,
        altura_cm: 170,
        partidos: 47,
        goles: 24,
        asistencias: 8,
        descripcion: 'Figura del Mundial 2022 con 4 goles. Su explosión con Argentina lo convirtió en uno de los delanteros más codiciados del mundo.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Julian_Alvarez_2022_FIFA_World_Cup.jpg'
    },
    {
        nombre: 'Rodrigo De Paul',
        apodo: 'Rodrgio',
        posicion: 'Mediocampista',
        club: 'Atlético de Madrid',
        dorsal: 7,
        edad: 30,
        altura_cm: 180,
        partidos: 84,
        goles: 9,
        asistencias: 17,
        descripcion: 'Motor del mediocampo albiceleste. Su energía y despliegue son fundamentales para el equilibrio del equipo.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Rodrigo_De_Paul_2021.jpg'
    },
    {
        nombre: 'Nicolás Otamendi',
        apodo: 'Cachete',
        posicion: 'Defensor',
        club: 'Benfica',
        dorsal: 19,
        edad: 36,
        altura_cm: 183,
        partidos: 130,
        goles: 8,
        asistencias: 2,
        descripcion: 'Capitán defensor con una trayectoria impresionante. Referente de la zaga argentina por más de una década.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Nicolas_Otamendi_2018.jpg'
    },
    {
        nombre: 'Leandro Paredes',
        apodo: 'Leo',
        posicion: 'Mediocampista',
        club: 'Roma',
        dorsal: 5,
        edad: 30,
        altura_cm: 183,
        partidos: 73,
        goles: 4,
        asistencias: 6,
        descripcion: 'Volante organizador de gran técnica. Entró como suplente en la final del Mundial y fue clave en el tramo decisivo.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Leandro_Paredes_2019.jpg'
    },
    {
        nombre: 'Alexis Mac Allister',
        apodo: 'Alexis',
        posicion: 'Mediocampista',
        club: 'Liverpool',
        dorsal: 20,
        edad: 25,
        altura_cm: 174,
        partidos: 41,
        goles: 6,
        asistencias: 5,
        descripcion: 'Brilló en el Mundial 2022 y hoy es titular indiscutido. Su adaptación al Liverpool lo catapultó al máximo nivel.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Alexis_Mac_Allister_%282022%29.jpg'
    },
    {
        nombre: 'Paulo Dybala',
        apodo: 'La Joya',
        posicion: 'Delantero',
        club: 'Roma',
        dorsal: 21,
        edad: 30,
        altura_cm: 177,
        partidos: 51,
        goles: 31,
        asistencias: 13,
        descripcion: 'Talento desbordante que convirtió el penal decisivo en la final de la Copa América 2021 ante Brasil.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Paulo_Dybala_2022.jpg'
    },
    {
        nombre: 'Lautaro Martínez',
        apodo: 'El Toro',
        posicion: 'Delantero',
        club: 'Inter de Milán',
        dorsal: 22,
        edad: 26,
        altura_cm: 174,
        partidos: 75,
        goles: 33,
        asistencias: 11,
        descripcion: 'Máximo goleador activo de la selección junto a Messi. Figura de la Copa América 2024 con 5 goles.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Lautaro_Mart%C3%ADnez_2023.jpg'
    },
    {
        nombre: 'Marcos Acuña',
        apodo: 'Huevo',
        posicion: 'Defensor',
        club: 'Sevilla',
        dorsal: 8,
        edad: 32,
        altura_cm: 172,
        partidos: 70,
        goles: 4,
        asistencias: 9,
        descripcion: 'Lateral izquierdo de gran desborde y corazón. Su entrega es un ejemplo para el grupo.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Marcos_Acu%C3%B1a_2019.jpg'
    },
    {
        nombre: 'Nahuel Molina',
        apodo: 'Nahuel',
        posicion: 'Defensor',
        club: 'Atlético de Madrid',
        dorsal: 26,
        edad: 26,
        altura_cm: 176,
        partidos: 46,
        goles: 5,
        asistencias: 7,
        descripcion: 'Lateral derecho moderno con gran proyección ofensiva. Anotó el 1-0 en la final del Mundial ante Francia.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Nahuel_Molina_2022.jpg'
    },
    {
        nombre: 'Cristian Romero',
        apodo: 'Cuti',
        posicion: 'Defensor',
        club: 'Tottenham',
        dorsal: 13,
        edad: 26,
        altura_cm: 185,
        partidos: 41,
        goles: 2,
        asistencias: 1,
        descripcion: 'Zaguero central agresivo y contundente. Uno de los mejores defensores del mundo en su posición.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Cristian_Romero_2022.jpg'
    },
    {
        nombre: 'Giovani Lo Celso',
        apodo: 'Gio',
        posicion: 'Mediocampista',
        club: 'Villarreal',
        dorsal: 18,
        edad: 28,
        altura_cm: 177,
        partidos: 58,
        goles: 9,
        asistencias: 10,
        descripcion: 'Mediocampista técnico con visión de juego. Sus lesiones le impidieron estar en Qatar, pero sigue siendo parte del proyecto.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Giovani_Lo_Celso_2019.jpg'
    },
    {
        nombre: 'Thiago Almada',
        apodo: 'Thiago',
        posicion: 'Mediocampista',
        club: 'Botafogo',
        dorsal: 16,
        edad: 23,
        altura_cm: 173,
        partidos: 12,
        goles: 1,
        asistencias: 2,
        descripcion: 'La gran joven promesa del mediocampo argentino. Ganó la Copa América 2024 y se perfila como titular fijo.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Thiago_Almada_2023.jpg/220px-Thiago_Almada_2023.jpg'
    },
    {
        nombre: 'Enzo Fernández',
        apodo: 'Enzo',
        posicion: 'Mediocampista',
        club: 'Chelsea',
        dorsal: 24,
        edad: 23,
        altura_cm: 178,
        partidos: 38,
        goles: 4,
        asistencias: 5,
        descripcion: 'Mejor jugador joven del Mundial 2022. Su madurez y calidad en el mediocampo lo convirtieron en referente a los 22 años.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Enzo_Fern%C3%A1ndez_2022_FIFA_World_Cup.jpg'
    },
    {
        nombre: 'Germán Pezzella',
        apodo: 'Pezzella',
        posicion: 'Defensor',
        club: 'Betis',
        dorsal: 6,
        edad: 33,
        altura_cm: 187,
        partidos: 52,
        goles: 3,
        asistencias: 1,
        descripcion: 'Defensor central con experiencia en Europa. Referente del grupo aunque hoy no sea titular indiscutido.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Germ%C3%A1n_Pezzella_2019.jpg'
    },
    {
        nombre: 'Lisandro Martínez',
        apodo: 'Licha',
        posicion: 'Defensor',
        club: 'Manchester United',
        dorsal: 25,
        edad: 26,
        altura_cm: 182,
        partidos: 30,
        goles: 1,
        asistencias: 0,
        descripcion: 'Zaguero central de enorme proyección. Su temporada en el Manchester United lo confirmó como titular de la Selección.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Lisandro_Mart%C3%ADnez_2022.jpg'
    },
    {
        nombre: 'Franco Armani',
        apodo: 'Armani',
        posicion: 'Arquero',
        club: 'River Plate',
        dorsal: 1,
        edad: 37,
        altura_cm: 189,
        partidos: 30,
        goles: 0,
        asistencias: 0,
        descripcion: 'Arquero histórico del proceso Scaloni. Pasó a ser el segundo arquero tras la explosión de Dibu Martínez.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Franco_Armani_2019.jpg'
    },
    {
        nombre: 'Nicolás González',
        apodo: 'Nico',
        posicion: 'Extremo',
        club: 'Juventus',
        dorsal: 12,
        edad: 26,
        altura_cm: 183,
        partidos: 37,
        goles: 9,
        asistencias: 7,
        descripcion: 'Extremo potente y vertical. Sus lesiones lo han frenado, pero cuando está disponible es una amenaza constante.',
        imagen_url: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Nicol%C3%A1s_Gonz%C3%A1lez_2022.jpg'
    }
];

const insert = db.prepare(`
  INSERT INTO jugadores
    (nombre, apodo, posicion, club, dorsal, edad, altura_cm, partidos, goles, asistencias, descripcion, imagen_url)
  VALUES
    (@nombre, @apodo, @posicion, @club, @dorsal, @edad, @altura_cm, @partidos, @goles, @asistencias, @descripcion, @imagen_url)
`);

const insertMany = db.transaction((jugadores) => {
    for (const j of jugadores) insert.run(j);
});

insertMany(jugadores);

console.log(`✅ Se insertaron ${jugadores.length} jugadores correctamente.`);