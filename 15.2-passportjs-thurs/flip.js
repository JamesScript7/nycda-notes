console.log("Flip is connected...");

module.exports = {
	flop: function(x,y) {
		console.log("Flop is working...");
		y();
	}
}

module.exports = {
	flop: function(route, callback) {
		var req = {...};
		var res = {...};
		callback(req,res);
	}
}