//number value is what the computer randomly chose
var number = pickNumber();
console.log(number);

//just storing the whole form in a variable
var guessForm = document.getElementById("guessForm");

//INPUT
var guessNum = document.getElementById("guess");

//BUTTON it grabs the submit
var button = document.getElementById("send");

//grabs the ul
var messagesList = document.getElementById("messages");


guessForm.addEventListener("submit", function(event) {
	event.preventDefault();

	//INPUT converted to an Integer
	//local scope
	var guess = parseInt(guessNum.value);

	//this creates an li element
	var messageItem = document.createElement("li");

	//only declared because it'll be assigned conditionally
	var messageText;

	//this will assign conditional messages to messageText
	if (guess == number) {
		messageText = "You got it!";
	} else if (guess > number) {
		messageText = "Your guess: " + guess + ". You guessed too high!";
	} else if (guess < number) {
		messageText = "Your guess: " + guess + ". You guessed too low!";
	} else {
		messageText = "Please type in a number..."
	}

	messageItem.innerHTML = messageText;
	messagesList.appendChild(messageItem);
});


function pickNumber() {
	  var d = new Date();
	  return d.getMilliseconds() % 10 + 1;

	  //Math method:
	  // var number = Math.round(Math.random() * 10);
	  // return number;
	}

