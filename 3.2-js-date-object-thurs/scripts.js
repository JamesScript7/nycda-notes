// // alert("just testing!");

// console.log("Hello World!");

// // var response = confirm("Are you sure?");

// // while (!confirm("click ok to esc!")) {};

// // var text = prompt("what is your age?");


// // var now = new Date();
// // var h = now.getHours();
// // var ampmHours;

// // var ampm;

// // if (h === 0) {
// // 	ampmHours = 12;	
// // } else if (h >= 12) {
// // 	ampmHours = h - 12;
// // 	console.log(ampmHours);
// // 	console.log("PM");
// // } else {
// // 	ampmHours = h;
// // 	console.log(ampmHours);
// // 	console.log("AM");
// // }


// //example

// var now = new Date();
// var hours24 = now.getHours();
// var minutes = now.getMinutes();

// var ampmHours;

// if (hours24 == 0) {
// 	ampmHours = 12; //midnight
// } else if (hours24 > 12) {
// 	ampmHours = hours24 - 12;
// } else {
// 	ampmHours = hours24;
// }

// var ampm;

// if (hours24 >= 12) {
// 	ampm = "PM";
// } else {
// 	ampm = "AM";
// }

// console.log(ampmHours + ":" + minutes + " " + ampm)

// var millisPerDay = 86400000;

// now.getTime();

// millis % 6;

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








