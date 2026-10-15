const express = require('express');
const cors = require('cors');
const recursoController = require('./controllers/recursoController');

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint HTTP
app.get('/api/recursos', (req, res) => recursoController.getRecursos(req, res));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});