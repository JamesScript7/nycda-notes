window.addEventListener("load", function() {
	
	var number = pickNumber();
	var form = document.getElementById("form")

	//fetches the id element guess from text box
	var guessBox = document.getElementById("guess");

	//is the submit event
	var button = document.getElementById("send");

	var userGuess = parseInt(guessBox.value);


	button.addEventListener("click", function() {
		//gets the user input from "guessBox"
		userGuess;
		console.log(userGuess);
	})

	form.addEventListener("submit", function() {
		event.preventDefault();
	});

	console.log(number);

	var messageText;

	if (guess == number) {
	 	messageText = "You Got it!";
	} else if (guess > number) {
		messageText = "Your guess was too high, lets try that again.";
	} else if (guess < number) {
	 	messageText = "Your guess was too low, lets try that again.";
	} else {
	  	var guessUnknown = document.createElement("p");
	 	messageText = "I don't know what you said.";
	}

	var para = document.createElement("p");
	para.innerHTML = messageText
	// document.body.appendChild(messageText);
	// console.log(messageText);

	function pickNumber() {
	  var d = new Date();
	  return d.getMilliseconds() % 10 + 1;
	}

	// var number = Math.random() * 10;
	// number = Math.floor(number + 1);

	// var guessNum = -1;
	// console.log(number);

	// while (guessNum != number) {
	// 	guessNum = prompt("Guess the number");
	// 	guessNum = parseInt(guessNum);
		
	// 	if ( guessNum == number) {
	// 		var guessIsNum = document.createElement("p");
	// 		guessIsNum.innerHTML = "You Got it!";
	// 		document.body.appendChild(guessIsNum);
	// 	} else if ( guessNum > number ) {
	// 		var guessIsGreater = document.createElement("p");
	// 		guessIsGreater.innerHTML = "Your guess was too high, lets try that again.";
	// 		document.body.appendChild(guessIsGreater);
	// 	} else if ( guessNum < number ){
	// 		var guessIsLess = document.createElement("p");
	// 		guessIsLess.innerHTML = "Your guess was too low, lets try that again.";
	// 		document.body.appendChild(guessIsLess);
	// 	}
	// }

















});