module.exports = function checkNumber(correctNumber, userGuess) {

	if (userGuess == correctNumber) {
		return {
			status: "WON",
			msg: "You got it!"
		}
	} else if (userGuess > correctNumber) {
		return {
			status: "TOO_HIGH",
			msg: "too high!"
		}
	} else if (userGuess < correctNumber) {
		return {
			status: "TOO_LOW",
			msg: "Too low!"
		}
	} else {
		return {
			status: "ERROR",
			msg: "I didn't understand that"
			}
		}




}