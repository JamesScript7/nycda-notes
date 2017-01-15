var Guest = function(name) {
	this.name = name;
}

Guest.prototype.arrive = function(party) {
	party.emit('doorbell', this);
}

module.exports = Guest;