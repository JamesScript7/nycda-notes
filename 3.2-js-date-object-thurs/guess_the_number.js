// var randNum = Math.random() * 10;

// var randChoice = Math.floor(randNum + 1);

// console.log("The Random number is: " + randChoice);

// var userChoice = parseInt(prompt("Choose a number!"));

// console.log("You chose the number: " + userChoice);

// if (userChoice == randChoice) {
// 	console.log("You Got it!!");
// } else {
// 	if (userChoice > randChoice) {
// 		console.log("Too high!");
// 	} else {
// 		console.log("Too low");
// 	}
// 	while (userChoice != randChoice) {
// 		console.log("Keep Trying!");

// 	}
// }

var number = Math.random() * 10;
number = Math.floor(number + 1);

var guess = -1;
console.log(number);

while (guess != number) {
	guess = prompt("Guess the number");
	guess = parseInt(guess);
	
	if ( guess == number) {
		alert("You got it!");
	} else if ( guess > number ) {
		alert("Your guess was too high, lets try that again.");
	} else if ( guess < number ){
		alert("Your guess was too low, lets try that again.");
	}
}