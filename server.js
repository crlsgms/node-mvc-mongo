// importa o express
let express = require('express')
// cria o servidor
let servidor= express()

//importa o body-parser
let bodyParser = require('body-parser')
// configura o servidor para usar o bodyParser
servidor.use(bodyParser.urlencoded({extend: false}))
servidor.use(bodyParser.json())

//importa o Mongoose
let mongoose = require('mongoose')
// conecta no mongodb local
mongoose.connect('mongodb://localhost/paciente', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// importa o controller do paciente
let pacienteController = require('./controllers/paciente.controller')

// cria as rotas para o paciente
servidor.get('/paciente', pacienteController.consulta)

servidor.post('/paciente', pacienteController.insere)

// sobe o servidor
servidor.listen ( 3003, () => {
    console.log('Servidor rodando com as rotas do paciente')
})