window.addEventListener("load", function() {
	
	var number = pickNumber();
	console.log(number);

	var form = document.getElementById("form")

	//fetches the id element guess from text box
	var guessBox = document.getElementById("guess");

	//is the submit event
	var button = document.getElementById("send");

	var userGuess;

	button.addEventListener("click", function() {
		//gets the user input from "guessBox"
		userGuess = guessBox.value;
	})

	form.addEventListener("submit", function() {
		event.preventDefault();
		var messageText;

		if (userGuess == number) {
		 	messageText = "You Got it!";
		} else if (userGuess > number) {
			messageText = "Your guess was too high, lets try that again.";
		} else if (userGuess < number) {
		 	messageText = "Your guess was too low, lets try that again.";
		} else {
		  	var guessUnknown = document.createElement("p");
		 	messageText = "I don't know what you said.";
		}

		var para = document.createElement("p");
		para.innerHTML = messageText

		document.body.appendChild(para);
	});

	function pickNumber() {
	  var d = new Date();
	  return d.getMilliseconds() % 10 + 1;
	}





});