// var now = new Date();
// var h = now.getHours();
// var ampmHours;

// var ampm;

// if (h === 0) {
// 	ampmHours = 12;	
// } else if (h >= 12) {
// 	ampmHours = h - 12;
// 	console.log(ampmHours);
// 	console.log("PM");
// } else {
// 	ampmHours = h;
// 	console.log(ampmHours);
// 	console.log("AM");
// }

var now = new Date();
var hours24 = now.getHours();

var minutes = now.getMinutes();
if (minutes < 10) {
	minutes = "0" + minutes;
}

var ampmHours;
if (hours24 == 0) {
	ampmHours = 12; //midnight
} else if (hours24 > 12) {
	ampmHours = hours24 - 12;
} else {
	ampmHours = hours24;
}

var ampm;
if (hours24 >= 12) {
	ampm = "PM";
} else {
	ampm = "AM";
}

console.log(ampmHours + ":" + minutes + " " + ampm);





