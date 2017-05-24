var contatosList = [
	{_id: 1, nome: 'Contato Exemplo 1', email: 'cont1@empresa.com.br'},
	{_id: 2, nome: 'Contato Exemplo 2', email: 'cont2@empresa.com.br'},
	{_id: 3, nome: 'Contato Exemplo 3',	email: 'cont3@empresa.com.br'}
];

var contatos = {};

contatos.listaContatos = function(req, res) {
	res.json(contatosList);
};

contatos.obtemContato = function(req, res) {
	var idContato = req.params.id;
	var contato = contatosList.filter(function(contato) {
		return contato._id == idContato;
	})[0];
	contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
};

module.exports = contatos;
