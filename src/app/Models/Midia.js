const mongoose = require('mongoose');

const Midia = mongoose.Schema(
 {
    nameM : { type: String, required: true},
    tipoM : { type: String, required: true},
    ano : { type: String, required: true},
    genero : { type: String, required: true},
    avaliacao : { type: Number, required: true},
    idcategoria : { type: Number, required: true}       
 },
 {
    timestamps: true,
 }

)

module.exports = mongoose.model('midia', Midia)