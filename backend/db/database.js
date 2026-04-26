const Database = require('better-sqlite3');
const path = require('path');

const DB_PATH = path.join(__dirname, 'argentina.db');

const db = new Database(DB_PATH);

db.exec(`
  CREATE TABLE IF NOT EXISTS jugadores (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre      TEXT    NOT NULL,
    apodo       TEXT,
    posicion    TEXT    NOT NULL,
    club        TEXT    NOT NULL,
    dorsal      INTEGER,
    edad        INTEGER,
    altura_cm   INTEGER,
    partidos    INTEGER DEFAULT 0,
    goles       INTEGER DEFAULT 0,
    asistencias INTEGER DEFAULT 0,
    descripcion TEXT,
    imagen_url  TEXT
  )
`);

module.exports = db;