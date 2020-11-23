// vai representar o modelo de dados do medico no MongoDB
// será o schema do MongoDB
let mongoose = require("mongoose");

let Paciente = require('./paciente.model')

let Schema = mongoose.Schema;

let medicoSchema = new Schema({
  nome: { type: String, required: true },
  crm: { type: Number, required: true },
  especialidade: { type: String, required: true },
  pacientes: [{ //vetor com varios ids de pacientes
      type: Schema.Types.ObjectId,
      ref: 'Paciente'
  }]
});

// vamos exportar o esquema para a utilização em outro arquivo
module.exports = mongoose.model("Medico", medicoSchema);
