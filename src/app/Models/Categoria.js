const mongoose = require('mongoose');

const Categoria = mongoose.Schema(
 {
    nameC : { type: String, required: true},
    tipoC : { type: String, required: true},
    id : { type: String, required: true}     
 },
 {
    timestamps: true,
 }

)

module.exports = mongoose.model('categoria', Categoria)