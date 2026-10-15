const db = require('../config/database');

class RecursoRepository {
    obtenerTodos() {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM recursos", [], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }
}

module.exports = new RecursoRepository();