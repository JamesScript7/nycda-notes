var album = {
	"title": "Yellow Submarine",
	"artist": "The Beatles",
	"summary": function() {}
}

for (var key in album) {
	console.log(key);
	console.log(album[key]);
}

var rectangle = {
	"height": 5,
	"width": 10,
	"findArea": function() {
		return this.height * this.width;
	}
}

console.log(rectangle.findArea());

object constructor (class)
object function


function Album(title, artist, year, tracks) {
	this.title = title;
	this.artist = artist;
	this.year = year;
	this.tracks = tracks;
	this.summary = function() {
		...
	};
}

var sgtPeppers = new Album("title", "artist", "year", "tracks");

function Rectangle(height, width) {
	this.height = height;
	this.width = width;
	this.findArea = function() {
		return this.height * this.width;
	};
}

var roomA = new Rectangle(10,10);
console.log("The area for Room A is: " + roomA.findArea());

var ScienceBuilding = new Rectangle(2,20);
console.log(ScienceBuilding.findArea());

function getId() {
	return this.id;
}

var o = {};
o.id = 123;
o.getId = getId;

var p = {};
p.id = 456;
p.getId = getId;

p.getId.call(o);


function greet(message) {
	return "Hello, " + this.name + ": " + message;
}

var o = {"name": "James"};
greet.call(o, "how's it going?")

// you might not know the number of arguments in advance.
greet.apply(o, ["how's it going?"])

var james = {"name": "James"};
var greetDaniel = greet.bind(james);


element.addEventListener('click', fucntion(){
	this.innerHTML = "Foo!";
}.bind(element));

var array = new Array();
var s = new String();
s.length;
String.prototype;

//this is to create a general
Album.prototype.trackCount

String.prototype.numWords = function() {
	return this.split(" ").length;
}

"zero one two three".numWords()

String.prototype.split = function() {
	return ["nope"];
}

"a b c".split(" ");


Rectangle.prototype.area = function() {}

function Square(side) {
	this.width = this.height = side;
}
















