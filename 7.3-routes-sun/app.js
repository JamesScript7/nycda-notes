var express = require('express');
var app = express();
var port = 3000;

// what if you want to insert a variable into HTML
// a bit of HTML with a bit of code in it.
							// if you wanna print the JS include "="
// embedded JS = ejs <h1> <%= JS %> </h1>
// pug = (used to be jade)

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');


var blogPosts = [];

//Adding client side files!!!!
app.use(express.static("public"));

app.get('/', function(req,res) {
	res.send(static);
})


app.get('/hello', function(req,res) {
	var data = {
		name: 'Everyone',
		stooges: ["moe", "larry", "curly"]
	}

	res.render('hello', data);
})


//This can be inside a function!
var number = Math.random() * 10;
	number = Math.floor(number) + 1;

console.log(number);

//QUERY MODE:
app.get('/guessGame', function(req,res) {
	var msg = null;
	//add conditional
	var guess = parseInt(req.query.guess);
	var msg = checkNumber(guess);
	res.send(`${msg}\n`);
});



//route handler
app.get('/guess/:num', function(req,res) {
	var guess = parseInt(req.params.num);
	var msg = checkNumber(guess);
	res.send(`${msg}\n`);
});



function checkNumber(guess) {
	var successMsg = `<h3>Your Guess: ${guess} <br /> Computer's Guess: ${number}</h3> <br /> <h1>You got it!</h1>`;
	var tooHighMsg = `<h3>Your Guess: ${guess} <br /> The number is too high!</h3>`;
	var tooLowMsg = `<h3>Your Guess: ${guess} <br /> The number is too low!</h3>`;
	var tryAgainMsg = `<h3>Your Guess: ${guess} <br /> I didn't get that, try again!</h3>`;
	var msg = "";

	if (guess == number) {
		msg = successMsg;
	} else if(guess > number) {
		msg = tooHighMsg;
	} else if (guess < number) {
		msg = tooLowMsg;
	} else {
		msg = tryAgainMsg;
	}

	return msg;
}

// function pickNumber() {
// 	var d = new Date();
// 	return Math.round(d.getMilliseconds() * 0.01);
// };



app.listen(port, function() {
	console.log("ExpressJS started on port " + port);
});














