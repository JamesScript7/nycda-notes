$( document ).ready(function() {


	var number = pickNumber();
	console.log(number);

	var guessForm = $("form.guessingGame");

	
	guessForm.submit(function(event) {
		event.preventDefault();

		var form = event.target;

		var guessTextBox = $(form).find("[name=guess]");
		var guess = parseInt( guessTextBox.val() );
		var messageItem = $("<li>");
		var messageText;

		if (guess == number) {
			messageText = "Your Number " + guess + ". You got it!";
		} else if ( guess > number) {
			messageText = "Your Number " + guess + ". It's too high!";
		} else if ( guess < number) {
			messageText = "Your Number " + guess + ". It's too low!";
		} else {
			messageText = "I didn't catch that...";
		}

		messageItem.html( messageText );
		$("ul.messages").append( messageItem );

	});




	function pickNumber() {
		var d = new Date();
		return d.getMilliseconds() % 10 + 1;
	}
});