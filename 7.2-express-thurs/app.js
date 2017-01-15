var express = require('express');
var app = express();
var port = 3000;

var text = "This is the About us Page!!!"

// var database = {
// 	users: {
// 		"123": { name: "Daniel" }
// 	}
// };

// app.get('/users/:id', function(req,res) {
// 	var id = req.params.id;
// 	var user = database.users[id];
// 	var data = JSON.stringify(user);
// 	res.send(data);
// });

//you have to make sure your routes are in order of priority...
// app.get('/users/:123', function(req,res) {
// })


app.get('/route1', function(req,res) {
	// res.send('Hello World!');
	// var d = new Date();
	// res.send(d.toString());
	res.send("you selected route1")

});

app.get('/route2', function(req,res) {
	res.send("you selected route2")
});

app.get('/content/about/us', function(req,res) {
	res.send(text)
});

// app.get('/square/:num', function(req,res) {
// 	var n = parseInt(req.params.num);

// 	var sq = n * n;
// 	res.send(sq.toString());
// });

app.get('/word/:string', function(req,res) {
	// console.log(req.params);
	var str = req.params.string;
	// console.log(string);
	res.send(text + "<br />" + str);
});

//a catch all route
// app.get('*', function(req,res) {
// 	res.send("I think you're lost.");
// });

app.get('/watch', function(req,res) {
	//["vid"] would work because it is an object.
	var videoID = req.query.vid;
	// console.log(res.videoID);
	res.send(videoID)
});



app.listen(port, function() {
	console.log("ExpressJS started on port " + port);
});










