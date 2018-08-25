'use strict'

class LoginController{
    constructor(Login){
    this.Login = Login;
    };

   
    async logar(req, res){
        const email = "rafaelmaggot64@gmail.com";
        const sena = "ramosmaggot64";

        if(Email === email & Senha === senha){
            res.render('index',{ msg: 'Logado com suceso!'});
        }
        else {
        res.render('login',{ msg: err.message});
        }
    }    
}
