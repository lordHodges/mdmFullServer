const mongoose = require('mongoose');


const medicionSchema = new mongoose.Schema({
    parametros: [{
        valor: { type: Number },
        parametro: { type: Schema.Types.ObjectId, ref: 'Parametro' }
    }],
    fecha: { type: Date.now() },
    operador: { type: Schema.Types.ObjectId, ref: 'Operador' },



});

module.exports = mongoose.model('Medicion', medicionSchema);
