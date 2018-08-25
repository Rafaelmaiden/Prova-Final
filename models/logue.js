'use strict'
    
const mongoose  = require('mongoose');

const schema = new mongoose.Schema({
    email: String,
    senha: String,
});
const Login = mongoose.model('Login', schema);
module.exports = Login;