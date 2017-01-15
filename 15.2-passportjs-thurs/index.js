var flip = require('./flip');
console.log("Index is running...");

var s = 'xyz';
var f = function(foo,bar){
	console.log('hi');
};


flip.flop('xyz', function(foo,bar) {
	console.log('hi');
});

// compare the parallelism:

app.get('xyz', function(req,res) {
	console.log('hi');
});








flip.flop(s, f);




var count = 0;

setInterval(function() {
	console.log(count);
	count++;
},500);