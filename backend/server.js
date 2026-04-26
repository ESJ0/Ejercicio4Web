const express = require('express');
const cors = require('cors');
const jugadoresRouter = require('./routes/jugadores');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/jugadores', jugadoresRouter);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
    console.log(`Backend corriendo en http://localhost:${PORT}`);
});