const express = require('express');
const router = express.Router();

const equipoCtrl = require('../controllers/equipo.controller');

router.get('/', equipoCtrl.getEquipos);
router.get('/:id', equipoCtrl.getEquipo);
router.post('/', equipoCtrl.createEquipo);
router.put('/:id', equipoCtrl.editEquipo);
router.delete('/:id', equipoCtrl.deleteEquipo);

module.exports = router;