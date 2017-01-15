var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var blogPosts = [
	{
		title: "Hello, World!",
		datetime: new Date()
	}
];


app.get('/', function(req,res) {
	var data = {};
	data.blogPosts = blogPosts;
	res.render('index', data);
});


app.post('/create', function(req, res) {
	var newPost = {};
	newPost.title = req.body.title;
	newPost.body = req.body.body;
	newPost.datetime = new Date();

	res.json(req.body);
});


app.listen(port, function(){
});

























