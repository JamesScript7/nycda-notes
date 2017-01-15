var getCssClassFromStatus = function(status) {
	var statusClasses = {
		"WON": "victory",
		"TOO_HIGH": "wrong",
		"TOO_LOW": "wrong",
		"ERROR": "error"
	}

	// var cssClass;

	// 	switch(status) {
	// 		case "WON":
	// 			return "victory";
	// 			break;
	// 		case "TOO_HIGH":
	// 		case "TOO_LOW":
	// 			return "wrong";
	// 		case "ERROR":
	// 			return "error";
	// 	}
	// return cssClass;
	console.log(statusClasses[status]);
	return statusClasses[status];
};

$(function() {
	$("#guessForm input[name=number]").keyup(function(res) {
	console.log("changed: " + event.target.value);
});

	$("#guessForm").submit(function(e) {
		event.preventDefault();

		//this is event.target!
		// console.log(this);
		// console.log(e.target);


		var form = e.target;
		var url = form.action;
		var input = $(form).find("input[name=number]");
		var inputVal = input.val();
		var requestData = { number: inputVal };

		// if (inputVal == "" || isNaN(inputVal)) {
		// 	alert("hey, what did you type?");
		// }

		$.get(url, requestData, function(res) {

			var cssClass = getCssClassFromStatus(res.status);

			$("#message")
				.text(res.msg)
				.prop("class", "")
				// .removeClass("victory")
				// .removeClass("wrong")
				// .removeClass("error")
				.addClass(cssClass);

		})
	})
})