var randomPromise = new Promise(function (resolve, reject) {
	if (Math.random() > 0.5) {
		resolve("Big enough!");
	} else {
		var err = new Error("Too small!");
		reject(err);
	}
});

randomPromise.then(function(str) {
	console.log(str);
}).catch(function(err) {
	console.error(err)
	// console.log(err);
	throw err;
});





