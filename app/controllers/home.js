var home = {};
home.index = function(req, res) {
	res.render('index', {nome: 'Express'});
};

module.exports = home;