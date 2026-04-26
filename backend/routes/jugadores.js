const express = require('express');
const router = express.Router();
const db = require('../db/database');

// GET /jugadores — listado completo, con búsqueda y filtro opcionales
router.get('/', (req, res) => {
    const { q, posicion } = req.query;

    let query = 'SELECT * FROM jugadores WHERE 1=1';
    const params = [];

    if (q) {
        query += ' AND (nombre LIKE ? OR apodo LIKE ? OR club LIKE ?)';
        const term = `%${q}%`;
        params.push(term, term, term);
    }

    if (posicion) {
        query += ' AND posicion = ?';
        params.push(posicion);
    }

    query += ' ORDER BY goles DESC';

    const jugadores = db.prepare(query).all(...params);
    res.json(jugadores);
});

// GET /jugadores/random — jugador aleatorio (debe ir ANTES de /:id)
router.get('/random', (req, res) => {
    const jugador = db.prepare('SELECT * FROM jugadores ORDER BY RANDOM() LIMIT 1').get();
    if (!jugador) return res.status(404).json({ error: 'No hay jugadores' });
    res.json(jugador);
});

// GET /jugadores/:id — detalle de un jugador
router.get('/:id', (req, res) => {
    const jugador = db.prepare('SELECT * FROM jugadores WHERE id = ?').get(req.params.id);
    if (!jugador) return res.status(404).json({ error: 'Jugador no encontrado' });
    res.json(jugador);
});

module.exports = router;