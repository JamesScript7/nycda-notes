var express = require('express');
var app = express();
port = 3002;

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req,res) {
	res.send(static);
});

app.get('/head', function(req,res) {
	res.render('head', {});
});

app.listen(port, function() {
	console.log("ExpressJS started on port " + port);
});