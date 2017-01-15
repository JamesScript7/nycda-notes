// var EventEmitter = require('events');

// var hammer = new EventEmitter();

// hammer.mash = function(x,y) {
// 	this.emit(this.x * this.y);
// };

// module.exports = hammer;

function Tool(x,y) {
	this.x = x;
	this.y = y;
}

Tool.prototype.area = function() {
	return this.x * this.y;
}

module.exports = Tool;