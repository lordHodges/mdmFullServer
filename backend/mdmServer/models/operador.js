const mongoose = require('mongoose');
const { Schema } = mongoose;

const operadorSchema = new Schema({
    name: { type: String },
    run: { type: String },
    fechaRegistro: {type: String}
   
});

module.exports = mongoose.model('Operador', operadorSchema);