var EventEmitter = require('events');

var house = new EventEmitter();
var bell = 0;


house.on('bell', function(event) {
	if (event['timestamp']) {
		bell++;
		//this runs when the door rings the second time.
		if (bell == 2) {
			var t = event.timestamp.getTime();
			console.log(bell + ' ' + '(' + t + ')');
			console.log('This is the second time the bell rang! Hello, who is it??');
			return
		} else if (bell < 2) {
			console.log("The bell only rang " + bell + " time... waiting for the second time..");
			house.emit('bell', {
				timestamp: new Date()
			});
		}
	} else {
		console.log("There was no timestamp!");
	}
})


house.emit('bell', {
	timestamp: new Date()
});