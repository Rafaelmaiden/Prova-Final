'use strict'
    
const mongoose  = require('mongoose');

const schema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    cpf: String,
    endereco: String,
    tempo_de_servico: Number,
    remuneracao: Number,
});
const Funcionario = mongoose.model('Funcionario', schema);
module.exports = Funcionario;