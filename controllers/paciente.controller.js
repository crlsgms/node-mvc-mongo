
// importa o esquema do paciente
const Paciente = require("../models/paciente.model")

// cria uma variavel contendo os metos de insercao e consulta

let pacienteController = {

    //metodo para inserção assíncrono - metodo pode continuar sem que o servidor já tenha respondido
    insere: async (req,res) => {
        let paciente = Paciente({
            nome: req.body.nome,
            peso: req.body.peso,
            altura: req.body.altura,
            temperatura: req.body.temperatura
        })
        // salva no banco de dados
        paciente.save()
        //enia o resultado de vvolta
        res.json(paciente)
    },
    consulta: async (req,res) => {
        Paciente.find()
        .then( pacientes => {
            res.json(pacientes) // retorna todos os pacientes
        })
    }
}

// vamos exportar 
module.exports = pacienteController