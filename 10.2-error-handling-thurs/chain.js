var promise = Promise.resolve("A");

promise.
	then(function(str) {
		return str + "B";
	}).
	then(function(str) {
		return str + "C";
	}).
	then(function(str) {
		// return str + "D";
		// return Promise.reject("uh-oh");
		// It'll jump to the catch
		throw new Error("throw");
	}).
	then(function(str) {
		return str + "E";
	}).
	then(function(result) {
		console.log(result);
	})
	.
	catch(function(err) {
		console.error(err);
	}).
	then(function() {
		console.log("Still Works!");
	});
