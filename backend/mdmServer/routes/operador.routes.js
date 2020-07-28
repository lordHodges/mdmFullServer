const express = require("express");
const router = express.Router();
const operador = require('../controllers/operador.controller');

router.get('/', operador.getOperadores);
router.post('/', operador.createOperador);
router.get('/:id', operador.getOperador);
router.put('/:id', operador.editOperador);

router.delete('/:id', operador.deleteOperador);

module.exports = router;
/* revisar si la uri debe requerir _id */