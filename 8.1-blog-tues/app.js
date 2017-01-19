var express = require('express');
var app = express();
var port = 3000;

var Mta = require('mta-gtfs');
var mta = new Mta({
  key: '86e1d2df9ba31c6754e75db39b3972e3', // only needed for mta.schedule() method
  feed_id: 1                  // optional, default = 1
});


//body-parser: for post requests
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( { extended: true } ));


//public folder: HTML and CSS
app.use(express.static("public"));

//views folder: ejs
app.set('view engine', 'ejs');



var blogPosts = [];


//routes


app.get('/list', function(req,res) {
	res.render('list', { posts: blogPosts });
});


app.post('/create', function(req,res) {
	var newTitle = req.body.title;
	var newBody = req.body.body;

	blogPosts.push(newTitle);
	blogPosts.push(newBody);

	console.log(blogPosts);

	res.redirect('/create.html');
});

app.get('/some/route', function(req,res) {
	res.set('Content-Type', 'text/html');
	res.send("<h1>HTML</h1>");
});

app.get('/mta', function(req,res) {
	mta.status('subway').then(function (result) {
	  console.log(result);
	});
})






app.listen(port, function() {
	console.log("ExpressJS started on port " + port);
});