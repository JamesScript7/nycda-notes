function Rectangle(x,y) {
	this.x = x;
	this.y = y;
}

Rectangle.prototype.area = function() {
	return this.x * this.y;
}

module.exports = Rectangle;