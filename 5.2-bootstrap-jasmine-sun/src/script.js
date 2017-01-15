function Rectangle(height, width) {
	this.height = height;
	this.width = width;
}

Rectangle.prototype.findArea = function() {
	return this.height * this.width;
}

Rectangle.prototype.findPerimeter = function() {
	return (this.height * 2) + (this.width * 2);
}