var express = require('express');
var app = express();
port = 3002;

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req,res) {
	res.send(static);
})

// first route
app.get('#', function(req,res) {
	res.send(console.log("testing"));
});

app.get('/lists', function(req,res) {
	res.send("Testing");
})

var database = {
	users: {
		"123": { name: "James" },
		"456": { name: "Daniel" }
	}
};


app.get("/userLinks", function(req,res) {
	res.render('userLinks', database);
});

app.get('/users/:id', function(req,res) {
	var id = req.params.id;
	var userData = database.users[id];

	res.render('user', {userData: database});
})


app.get("/date", function(req,res) {
	var d = new Date();
	res.json(d);
})

app.get("/stooges", function(req,res) {
	var stooges = ["moe","larry","curly"];
	res.json(stooges);
})




app.listen(port, function() {
	console.log("ExpressJS started on port " + port);
});