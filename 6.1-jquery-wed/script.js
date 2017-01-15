//A status update...

//A status update has 3 properties.

// Author: String starting with "@"
// status text: String
// Date & Time: Date()

// var status = function(aAuthor, aStatusText, aDateTime) {
// 	this.pAuthor = aAuthor;
// 	this.pStatusText = aStatusText;
// 	this.pDateTime = aDateTime;
// }

//You'll get the time from when you create the status.
// Status class becomes a factory to create more objects.


//function Status(...) {} no real difference.
var Status = function(author, statusText, timestamp) {
	this.author = author;
	this.statusText = statusText;

	if (timestamp) {
		this.timestamp = timestamp;
	} else {
		this.timestamp = new Date();
	}
}

var status1 = new Status("superceleb", "You guys are awesome!")

Status.prototype.addToDOM = function() {
	var update = document.getElementById("update");
	var newUpdate = document.createElement("p");
	newUpdate.innerHTML = this.author + ": " + this.statusText;
	update.appendChild(newUpdate);
}

// Status.prototype.save = function() {...}
// status1.save();
// status2.delete();

status1.addToDOM();

// var d = new Date();
// new Status("superceleb", "You guys are awesome!", d);

// ***you don't want to rely on the browser for user id...
// can be dangerous...


// properties in the constructor
// functions go in the prototype






























