// Exercise 1

	var sentence = "The quick brown fox jumped over the lazy dog.";

	var splitted = sentence.split(" ");
	console.log(splitted);

	var wordCount = splitted.length;
	console.log("\""+ sentence + "\"" + " has " + wordCount + " words.");


// Exercise 2 - Reversing Fun

	var arr = [1,2,3,4,5];

	// Way 1 - Using a Method
	var numReverse = arr.reverse();
	console.log(numReverse);

	// Way 2 - Using a loop
	function moveNum(arr) {
		var newArr = [];
		for (var i=arr.length; i > 0; i--) {
			newArr += arr.pop();
		}
		return newArr.split("");
	}
	moveNum(arr);

	// Way 3 - Mathematically with %

	// input
	var number = 90210;
	// output
	var reversed = [];

	while (number > 0) {
		reversed.push(number % 10);
		// pushes the last number of number
		number = Math.floor(number/10);
		// moves the decimal point to the left 9021.0, 902.1, etc.
	}

	console.log(reversed);


// Exercise 3

	function addThree(a,b,c) {
		var sum = a + b + c;
		return sum;
	}

	addThree(1,1,1);
	// => 3
	var x = addThree(0,1,1);
	console.log(x);
	// => 2

	// A variable can represent a function!
	var y = addThree;
	
	console.log(y);
	// => [Function: addThree]

	y(0,0,1);
	// => 1


// Exercise 4 - Count Words

	function countWords(x) {
		var wordSplit = "";

		if ( typeof x === 'string' ) {
			wordSplit = x.split(" ");
		} else {
			return "Please enter a sentence!";
		}
		return wordSplit.length;
	}

	countWords("The quick brown fox jumped over the lazy dog.");
	// => 9
	countWords(10);
	// => "Please enter a sentence!"

// Exercise 5 - Callback Functions!

	var sayHi = function() {
		console.log("HI!");
	};

	function callfunction(f) {
		console.log("About to call f");
		f();
		f();
		f();
		console.log("Finished calling f");
	}

	sayHi();
	// => "HI!"

	callfunction(sayHi);
	// => "About to call f"
	// => "HI!"
	// => "HI!"
	// => "HI!"
	// => "Finished calling f"








