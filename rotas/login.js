'use strict'

const express = require('express');
const LoginController = require('../controllers/login');
const Login = require('../models/logue')

const router = express.Router();

const loginController = new LoginController(Login);

router.get('/login', function(rer, res){
    res.render('login');
});

router.post('/login', (req, res) => loginController.logar(req, res));

module.exports = router;