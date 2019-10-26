var express = require("express");
var router = express.Router();

var produtos = require('./../inc/produtos');


router.get("/", function(req, res, next){
	produtos.listAll().then(results => {
		produtos.render(req, res);		
	});
});

router.post('/', function(req, res, next){
		
	if(!req.body.descricao){
		produtos.render(req, res, "Digite uma descricao");		
	}else if(!req.body.preco){
		produtos.render(req, res, "Digite um valor");		
	}else if(!req.body.ativo){
		produtos.render(req, res, "Informe uma das opções Sim ou Não");		
	}else{
		produtos.save(req.body).then(results => {
			produtos.render(req, res, null, "Produto adicionado!")
		}).catch(err => {
			produtos.render(req, res, err.message);		
		});		
	}
});

router.put('/:id', function(req, res, next){

});


module.exports = router;