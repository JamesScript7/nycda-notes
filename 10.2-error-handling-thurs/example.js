var Sequelize = require('sequelize');
var databaseURL = 'sqlite://dev.sqlite3';
var sequelize = new Sequelize(databaseURL);

var Hat = sequelize.define('hat', {
	name: Sequelize.STRING,
	material: Sequelize.STRING,
	height: Sequelize.INTEGER,
	brim: Sequelize.BOOLEAN
});

Hat
	.sync().then(function() {

		Hat.create({
		name: 'cowboy',
		material: 'straw',
		height: 4,
		brim: true
		});

		Hat.findAll({
			where: { brim: true }
		}).then(function(results) {
			var data = results[0].dataValues;
			console.log(data.name);
		});
			

}).catch(function(err) {
		console.error(err);
});








