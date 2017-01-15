var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

var databaseURL = 'sqlite://dev.sqlite3';
var sequelize = new Sequelize(databaseURL);

var app = express();

var BlogPost = sequelize.define('blogPost', {
	title: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	body: Sequelize.STRING
});

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/blogs.json', function(req,res) {
	BlogPost.findAll().then(function(rows) {
		res.json(rows);
	})
})

app.get('/blogs', function(res,req) {

	BlogPost.findAll().then(function(blogs) {
		res.render("blogs", { blogs : BlogPost});
	});

})

app.post('/blogs', function(req,res) {
	var data = {
		title: "HALLO!",
		body: "DATA DATA DATA"
	};

	BlogPost.create(data).then(function() {
		res.redirect("/blogs");
	})
})







sequelize.sync().then(function() {
	console.log("Synced")

	app.listen(3000, function() {
		console.log("and listening!!");
	});

})

