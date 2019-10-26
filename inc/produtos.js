var conn = require("./database");

module.exports = {


	render(req, res, error, success){

		res.render('includes/pages/produtos', {
			title: "Produto",
			body: req.body,
			error,
			success
		});

	},

	save(fields){

		return new Promise((resolve, reject) => {

			conn.query(`
				INSERT INTO produtos(descricao, preco, ativo)
				VALUES(?, ?, ?)
			`, [

				fields.descricao,
				fields.preco,
				fields.ativo

			], (err, results) => {

				if(err){
					reject(err);
				}else{
					resolve(results);
				}

			});

		});

	},

	listAll(){

		return new Promise((resolve, reject) => {

			conn.query(`
				SELECT * FROM produtos
			`, (err, results) => {
				if(err){
					reject(err);
				}else{
					resolve(results);
				}
			});

		});
	}

}