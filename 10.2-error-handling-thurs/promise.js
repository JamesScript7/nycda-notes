var promise = new Promise(function(res,rej) {
	setTimeout(function() {
		res('Hello World');
	}, 1000);
});

promise.
	then(function(res) {
		console.log(res);
		console.log("THEN");
		return res + "A";
}).
	then(function(res) {
		console.log(res);
		console.log("WORKED!!!");
		return res + "B";
}).
	then(function(res) {
		console.log(res);
		return res + "C";
	}).
	catch(function(err) {
		console.error(err);
}).
	then(function(res) {
		console.log(res)
		console.log("Let's continue...");
});







