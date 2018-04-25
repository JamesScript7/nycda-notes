//example 1

try {
	console.log("Ready...");
	console.log("Set...");

	// throw new Error("ooops");

	console.log("Go!");

} catch(err) {
	console.error("We got an error!");
	console.error(err);
}

console.log("Oh well..");

//example 2

var promise = new Promise(function(resolved, reject) {
	setTimeout(function() {
		// resolve('hello world');
		reject("this doesn't work");
		var e = new Error("this doesn't work");
		reject(e);
	}, 1000);
});

promise.then(function(result) {
	console.log(result);
});

promise.catch(function(err) {
	console.log("uh oh");
})

//example 3

var p = Promise.resolve("all done!");
p.then(function(message) {
	console.log(message);
})

//a broken promise

var p = Promise.reject("Broken!");
p.catch(function(err) {
	console.log(err);
})


var promise = new Promise(...);

Promise.resolve(2).
	then(function(num) {
		return num * num;
	}).
	then(function(result) {
		console.log(result);
	})


//a forever loop that raises the count!

var count = 0;

setInterval(function() {
  count += 1;
  console.log("Hello, this is the count:" + count);
}, 1000);
