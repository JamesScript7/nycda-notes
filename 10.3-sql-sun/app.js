var Sequelize = require('sequelize');
var databaseURL = 'sqlite://dev.sqlite3';
var sequelize = new Sequelize(databaseURL);


var BlogPost = sequelize.define('blogPost', {
	title: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	body: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},

	timestamp: {
		type: Sequelize.DATE,
		allowNull: false
	}
});


sequelize.sync({force: true})
.then(function() {


	BlogPost.bulkCreate([
		{
			title: 'First Hello World',
			body: 'This is a FIRST test.',
			timestamp: new Date()
		},

		{
			title: 'Second Hello World',
			body: 'This the SECOND test.',
			timestamp: new Date()
		},

		{
			title: '3rd Hello World',
			body: 'This is the 3rd!',
			timestamp: new Date()
		}

	])

	BlogPost.create({
		title: "New Title",
		body: "New Body",
		timestamp: new Date()
	});

	BlogPost.create({
		title: "Different Title",
		body: "Different Body",
		timestamp: new Date()
	});

}).then(function() {
	return BlogPost.findAll();

	// return BlogPost.findAll( {
	// 	where: {
	// 		title: '3rd Hello World' 
	// 	}
	// });
}).then(function(rows) {
	console.log(`NUMBER OF ROWS: ${rows.length}`);

	if (rows.length > 0) {
		for (i = 0; i < rows.length; i++) {
			var blog = rows[i].dataValues;
			console.log(`Row ${i} Title: ${blog.title}`);
			console.log(`Row ${i} Body: ${blog.body}`);
			console.log(`Row ${i} Date: ${blog.timestamp}`);
		}
	}

}).catch(function(err) {
	console.error(`UH OH! YOU GOT AN ERROR: ${err}`);
});







