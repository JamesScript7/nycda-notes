// Triangle Numbers using for loop:

	function TriNum(x) {
		var result = 0;

		for(var i=x; i > 0; i--) {
			result += i;
		}
		
		return result;
	}

	console.log(TriNum(100));
	// => 5050
	// note: 100 + 99 + 98 ...


// Using recursive (it's good for dealing with sequential numbers)

	function recursiveTri(x) {
		//first set up a stop method
		if (x < 0) {
			return -1;
		} else if (x === 0) {
			return 0;
		} else {
			return (x + recursiveTri(x - 1));
		};
	}

	console.log(recursiveTri(100));
	// => 5050
