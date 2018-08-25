'use strict'

var express = require('express');
var router = express.Router();

/* GET página inicial.*/
router.get('/', function (req, res){
    res.render('index', {title: 'Página Inicial'});
});
module.exports = router;