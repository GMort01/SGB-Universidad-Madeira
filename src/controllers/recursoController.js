const recursoService = require('../services/recursoService');

class RecursoController {
    async getRecursos(req, res) {
        try {
            const recursos = await recursoService.listarRecursos();
            res.status(200).json({ success: true, data: recursos });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = new RecursoController();