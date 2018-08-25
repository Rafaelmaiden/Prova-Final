'use strict'

const express = require('express');
const FuncionarioController = require("../controllers/funcionario");
const Funcionario = require("../models/funcionarios");

const router = express.Router();
const funcionarioController = new FuncionarioController(Funcionario);

router.get('/cadastro', function(req, res){
    res.render('cadastro-funcionario');
});
//Recebe os dados preenchidos no formulário para adicionar no banco
router.post('/cadastro', (req, res) => funcionarioController.cadastrar(req, res));
    /*console.log(req.body);
    res.send('Funcionário cadastrado: '+ req.body.nome);
});*/

//Retorna uma lista com todos os funcionários do banco
router.get('/', (req, res) => funcionarioController.consultaTodos(req, res));

//Retorna o funcionário pelo id informado
router.get('/:id/:acao', (req, res) => funcionarioController.consultaPorId(req, res));

//Recebe os dados preenchidos no form para alterar um funcionário
router.put('/:id', (req, res) => funcionarioController.altera(req, res));

router.delete('/:id', (req, res) => funcionarioController.remove(req, res));

module.exports = router;