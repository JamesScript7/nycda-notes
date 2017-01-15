var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('public'));

//Do I really need this if I'm using the static files?
//because it doesn't print out 'Hello World!'
app.get('/', function(req,res) {
	res.send('Hello World!');
});


app.post('/', function(req,res) {
	res.send('Got a POST request!');
});

app.put('/user', function(req,res) {
	res.send('Got a PUT request!');
});

app.delete('/user', function(req,res) {
	res.send('Got a DELETE request!');
});

app.listen(port, function() {
	console.log("Example app listening on port " + port);
});