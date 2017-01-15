var EventEmitter = require('events');

var emitter = new EventEmitter();

emitter.on('marco', function() {
	console.log('polo');
});

emitter.emit('marco', {
	timestamp: new Date();
})

setTimeout(function() {
	emitter.emit('marco', {
		timestamp: new Date();
	})
}, 1500);


// as a function:
setTimeout(function() {
	marco({timestamp: new Date();})
})

