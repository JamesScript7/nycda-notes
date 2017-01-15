var partyGreeter = require("./partyGreeter")
var Guest = require("./guest")

partyGreeter.answerDoor( function(guest) {
	console.log("Welcome " + guest.name);
});

partyGreeter.answerDoor(function(guest) {
	console.log("Here's a gift bag :-)");
});

// partyGreeter.showUp("JamesKim");

// partyGreeter.emit('doorbell', {name: "James"});
// partyGreeter.emit('doorbell', {name: "Daniel"});
// partyGreeter.emit('doorbell', {name: "Ben"});
// partyGreeter.emit('doorbell', {name: "Fizal"});

var guest1 = new Guest("Jimbo");
guest1.arrive(partyGreeter);