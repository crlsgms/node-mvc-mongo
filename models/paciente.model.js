// vai representar o modelo de dados do paciente no MongoDB
// será o schema do MongoDB
let mongoose = require("mongoose");

let Schema = mongoose.Schema;
let Medico = require("./medico.model");

let pacienteSchema = new Schema({
  nome: { type: String, required: true },
  peso: { type: Number, required: true },
  altura: { type: Number, required: true },
  temperatura: { type: Number, required: true },
  medico: { type: Schema.Types.ObjectId, ref: "Medico" },
});

// vamos exportar o esquema para a utilização em outro arquivo
module.exports = mongoose.model("Paciente", pacienteSchema);
