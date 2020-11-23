// importa o esquema do paciente
const Paciente = require("../models/paciente.model");

// cria uma variavel contendo os metos de insercao e consulta

let pacienteController = {
  //metodo para inserção assíncrono - metodo pode continuar sem que o servidor já tenha respondido
  insere: async (req, res) => {
    let paciente = Paciente({
      nome: req.body.nome,
      peso: req.body.peso,
      altura: req.body.altura,
      temperatura: req.body.temperatura,
      medico: req.body.medico,
    });
    // salva no banco de dados
    paciente.save();
    //enia o resultado de volta
    res.json(paciente);
  },
  consulta: async (req, res) => {
    Paciente.find()
      .populate("medico") // popula o medico com o id
      .exec() //roda o populate
      .then((pacientes) => {
        res.json(pacientes); // retorna todos os pacientes
      });
  },
  remove: async (req, res) => {
    Paciente.deleteOne({ _id: req.params.id }).then((resultado) => {
      console.log("Paciente removido com sucesso");
      res.json(resultado);
    });
  },
  atualiza: async (req, res) => {
    Paciente.updateOne(
      { _id: req.params.id },
      {
        nome: req.body.nome,
        peso: req.body.peso,
        altura: req.body.altura,
        temperatura: req.body.temperatura,
      }
    ).then((resultado) => {
      console.log("Atualização realizada com sucesso");
      res.json(resultado);
    });
  },
};

// vamos exportar
module.exports = pacienteController;
