// Capitalizing the first letter of a word

	function capFirst(x) {
		return x.toUpperCase().charAt(0) + x.slice(1);
	}

	console.log(capFirst("hello"));
	// => Hello

// Capitalizing every first word

	function capEveryFirst(x) {
		var arr = x.split('');
		var result = [];

		for (var i=0; i<arr.length; i++) {
		  
		  if (arr[i] == ' ') {
		    result.push(' ');
		    result.push(arr[i + 1].toUpperCase());
		    i++;
		  } else if (i === 0) {
		    result.push(arr[i].toUpperCase());
		  } else {
		    result.push(arr[i]); 
		  }
		}
		return result.join("");
	}

	capEveryFirst("why hello there.");
