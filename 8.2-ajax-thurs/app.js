var express = require('express');
var app = express();
port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req,res) {
	res.send(static);
})


app.get('#', function(req,res) {
	res.send(console.log("testing"));
});

app.get('/lists', function(req,res) {
	res.send("testing");
});

// app.get('#', function(req,res) {
// 	res.send("You typed 123!!!");
// });


// var database = {
// 	users: {
// 		"123": { name: "James" },
// 		"456": { name: "Daniel" }
// 	}
// };


// app.get("/userLinks", function(req,res) {
// 	res.render('userLinks', database);
// });


// app.get('/users/:id', function() {
// 	var id = req.params.id;
// 	var userData = database.users[id];

// 	res.render('user', userData);
// })

// app.get("/date", function(req,res) {
// 	var d = new Date();
// 	res.json(d);
// })

app.get("/stooges.json", function(req,res) {
	var stooges = [1,2,3];
	res.json(stooges);
})












app.listen(port, function() {
	console.log("ExpressJS started on port " + port);
});