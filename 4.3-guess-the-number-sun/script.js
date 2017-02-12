// window.onload = function() {
window.addEventListener("load", function() {

	var h1 = document.getElementById("title");
	h1.innerHTML = "Changed!";


	var h2 = document.createElement("h2");
	h2.innerHTML = "Added!";
	document.body.appendChild(h2);


	var content = document.createElement("div");
	content.innerHTML = "DIV was magically created";
	document.body.appendChild(content);

	var para = document.createElement("p");
	para.innerHTML = "paragraph in the div";
	content.appendChild(para);

	var guessBox = document.getElementById("guess");
	var guess = parseInt(guessBox.value);

	//older way
	// var button = document.getElementById("send");
	// var clickFunction = function() {
	// 	alert("You've typed the number " + guess);
	// }

	// button.onclick = clickFunction();

	//the more correct way
	// var clickFunction = function() {
	// 	alert("You've typed the number " + guess);
	// }

	// button.addEventListener("click", clickFunction);

	//or make it anonymous
	// button.addEventListener("click", function() {
	// 	alert("you clicked me");
	// })


});







