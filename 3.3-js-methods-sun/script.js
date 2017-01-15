var sentence = "The quick brown fox jumped over the lazy dog.";

var splitted = sentence.split(" ");
// console.log(splitted);

var wordCount = splitted.length;
console.log("\""+ sentence + "\"" + " has " + wordCount + " words.");

var arr = [1,2,3,4,5];

// way 1 - as an Array
// var numReverse = arr.reverse();
// console.log(numReverse);

// way 2 - long way

// function moveNum(arr) {
// 	var newArr = [];
// 	for ( i=arr.length; i > 0; i--) {
// 		newArr += arr.pop();
// 	}
// 	return newArr.split("");
// }
// moveNum(arr);

// way 3 - Mathematically with %

// thought process with % would be: modolo the length of the array and order them by the length of the remainder:

// arr.length % (i counting down to 1) = the order placement in the array.

// 5 % 5 = 0 = arr[0]
// 5 % 4 = 1 = arr[1]
// 5 % 3 = 2 = arr[2]
// 5 % 2 = 3 = arr[3]
// 5 % 1 = 4 = arr[4]

var number = 90210; //input
var reversed = []; //output

while (number > 0) {
	reversed.push(number % 10);
	number = Math.floor(number/10);
}

console.log(reversed);


//new:

function addThree(a,b,c) {
	// console.log("In addThree");
	var sum = a + b + c;
	return sum;
}

var x = addThree(1,3,8);

// console.log(x);

var y = addThree;

y(1,2,3);
addThree(2,4,5);



// example:
verb(noun) {
	return noun
}


//count words

function countWords(x) {
	var wordSplit = "";
	if ( typeof x === 'string' ) {
		wordSplit = x.split(" ").length;
	} else {
		return "Please enter a sentence!";
	}
	return wordSplit;
}

countWords("The quick brown fox jumped over the lazy dog.");

// countWords(10);

//callback functions!

var sayHi = function() {
	console.log("HIII!");
};

function callfunction(f) {
	console.log("About to call f");
	f();
	f();
	f();
	console.log("Finished calling f");
}

// sayHi();

callfunction(sayHi);










