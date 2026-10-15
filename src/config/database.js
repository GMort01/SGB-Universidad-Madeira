const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../../biblioteca.db');
const db = new sqlite3.Database(dbPath);

// Inicializar la tabla y datos de prueba
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS recursos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            coleccion TEXT NOT NULL,
            disponible BOOLEAN DEFAULT 1
        )
    `);

    // Insertar un par de libros si la tabla está vacía
    db.get("SELECT COUNT(*) AS count FROM recursos", (err, row) => {
        if (row.count === 0) {
            db.run("INSERT INTO recursos (titulo, coleccion) VALUES ('Cien Años de Soledad', 'General')");
            db.run("INSERT INTO recursos (titulo, coleccion) VALUES ('Cálculo Multivariable', 'Reserva')");
            console.log("🟢 Base de datos cargada con datos de prueba.");
        }
    });
});

module.exports = db;