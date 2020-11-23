// vai representar o modelo de dados do medico no MongoDB
// será o schema do MongoDB
let mongoose = require('mongoose')

let Schema = mongoose.Schema

let medicoSchema = new Schema({
    nome: {type: String, required: true},
    crm: {type: Number, required: true},
    especialidade: {type: String, required: true},
})

// vamos exportar o esquema para a utilização em outro arquivo
module.exports = mongoose.model('Medico', medicoSchema)