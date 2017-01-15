var EventEmitter = require('events');

var houseParty = new EventEmitter();
var eventName = 'doorbell';

// This moved to theParty.js
// var greet = function(guest) {
// 	console.log("Welcome, " + guest.name);
// }

houseParty.showUp = function(name) {
	var obj = {};
	obj.name = name;
	this.emit(eventName, obj);
}

houseParty.answerDoor = function(greetFunction) {
	this.on(eventName, greetFunction);
}

// houseParty.on(eventName, greet);

// houseParty.on('doorbell', function(guest) {
// 	greet(guest);
// })

module.exports = houseParty;