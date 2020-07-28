const mongoose = require('mongoose');
const { Schema } = mongoose;

const parametroSchema = new Schema({
    name: { type: String, required: true },
    valor: { type: Number }



    /* position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true} */
});

module.exports = mongoose.model('Parametro', parametroSchema);