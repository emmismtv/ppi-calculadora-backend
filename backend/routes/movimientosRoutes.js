const express = require('express');
const router = express.Router();

const { getMovimientos, addMovimientos, deleteMovimientos } = require('../controllers/movimientosControllers');

router.get('/', getMovimientos);
router.post ('/', addMovimientos);
router.delete('/:id', deleteMovimientos);

module.exports = router;