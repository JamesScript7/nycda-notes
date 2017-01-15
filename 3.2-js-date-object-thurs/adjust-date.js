var now = new Date();
console.log(now);

var t = now.getTime();
// console.log(t);

var seconds = t + 1234 * 1000;
// console.log(seconds);

var minutes = t + 1234 * 60 * 1000;
// console.log(minutes);

var hours = t + 1234 * 60 * 60 * 1000;
// console.log(hours);

var convertSec = new Date(seconds);
console.log("1,234 seconds from now:\n" + convertSec);

var convertMin = new Date(minutes);
console.log("1,234 mintues from now:\n" + convertMin);

var convertHr = new Date(hours);
console.log("1,234 hours from now:\n" + convertHr);

// so basically convert seconds, minutes, hours to milliseconds
// then place the milliseconds value in a "new Date();" object.