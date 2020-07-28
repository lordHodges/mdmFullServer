const mongoose = require('mongoose');
const { Schema } = mongoose;

const repuestoSchema = new Schema ({
    name: { type: String },
    marca:{type:String},
    serie:{ type: String },
    proveedorRut:{ type: String },
    fechaIngreso:{ type: String }
});

module.exports = mongoose.model('Repuesto', repuestoSchema);