'use strict'

class FuncionarioController {

    constructor(Funcionario){
        this.Funcionario = Funcionario;
    };

    async consultaTodos(req, res) {
		try {
            const todosFuncionarios = await this.Funcionario.find({});
			res.render('lista-funcionario', { funcionarios: todosFuncionarios })
		} catch (err) {
			res.render('lista-funcionario', { msg: err.message })
		}
	}
    cadastrar(req, res){
        const Funcionario = new this.Funcionario(req.body);
        //console.log("#########################################: "+req.body.nome);
        return Funcionario.save() 
          .then(() => res.render('cadastro-funcionario', {msg: "Funcionário cadastrado com sucesso!"}))
          .catch(err => res.render('cadastro-funcionario', {msg: err. message}));

    }

    async consultaPorId(req, res){
        try{
            console.log(req.params);
            const funcionarioEncontrado = await this.Funcionario.findOne ({ _id: req.params.id});
            if (req.params.acao === 'remove'){
                res.render('exclui-funcionario', {funcionario: funcionarioEncontrado})
            } else{
                res.render('altera-funcionario', {funcionario: funcionarioEncontrado})
            }

            } catch(err){
                res.render('lista-funcionario', {funcionarios: [], msg: err.message})
         }
    }

    altera(req, res) {
        return this.Funcionario.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(async () => {
            const todosFuncionarios = await this.Funcionario.find({});
            res.render('lista-funcionario', {funcionarios: todosFuncionarios, msg: "Funcionário alterado com sucesso!"})
        })
        .catch(err => res.render('lista-funcionario', {msg: err.message}));
    }

    remove(req, res) {
        return this.Funcionario.remove({ _id: req.params.id})
            .then(async () =>{
                const todosFuncionarios = await this.Funcionario.find({});
                res.render('lista-funcionario', {funcionarios: todosFuncionarios, msg: "Funcionário removido com sucesso!"});
            })
            .catch(err => res.render('lista-funcionario', {msg: err.message}));
    }
}
module.exports = FuncionarioController;
