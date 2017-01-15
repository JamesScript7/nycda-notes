var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var square = require('./square');

app.get('/hello', function(req,res) {
	res.send("Hello, world!");
});

app.post('/uploads', function() {
	// res.send(req.body.caption);
	res.send("my cat photo");
})

app.get('/square/:num', function(req,res) {
	var num = parseInt(req.params.num);
	var squared = square(num);
	res.send(`The answer is ${squared}`);
})

module.exports = app;
