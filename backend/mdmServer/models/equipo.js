const mongoose = require('mongoose');
const { Schema } = mongoose;



const equipoSchema = new Schema({
    name: { type: String },
    marca: { type: String },
    modelo: { type: String },
    serie: { type: String },
    fechaIngreso: { type: String },
    localizacion: { type: String },
    tipo: { type: String },
    repuestos: [{
        cantidad: { type: Number, default: 0 },
        fechaCambio:{ type: String },
        item: { type: Schema.Types.ObjectId, ref: 'Repuesto' }       
    }],
    valoresNominales: [{
        name: { type: String },
        valor: { type: Number, default: 0 }
    }],
    mediciones: [{
        type: Schema.Types.ObjectId, ref: 'Medicion'
    }]
    });


module.exports = mongoose.model('Equipo', equipoSchema);