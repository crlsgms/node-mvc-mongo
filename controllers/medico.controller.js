const Medico = require("../models/medico.model");

let medicoController = {
  //metodo para inserção assíncrono - metodo pode continuar sem que o servidor já tenha respondido
  insere: async (req, res) => {
    let medico = Medico({
      nome: req.body.nome,
      crm: req.body.crm,
      especialidade: req.body.especialidade,
    });
    // salva no banco de dados
    medico.save();
    //enia o resultado de volta
    res.json(medico);
  },
  consulta: async (req, res) => {
    Medico.find().then((medicos) => {
      res.json(medicos); // retorna todos os medicos
    });
  },
};

module.exports = medicoController;
