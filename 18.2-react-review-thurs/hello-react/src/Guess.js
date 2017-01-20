import React, { Component } from 'react';

//import instead of <link>ing
import './guess.css'

class OddOrEven extends Component {

	constructor(props) {
		super(props);

		this.answer = this.pickNumber();

		this.state = {
			gameStatus: "new",
			message: "Guess the number!"
		}

		this.onNumberChange = this.onNumberChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	pickNumber() {
		var d = new Date();
		return d.getMilliseconds() % 10 + 1;
	}

	onSubmit(event) {
		event.preventDefault();

		let msg, newStatus;

		if (this.guess === this.answer) {
			msg = "you got it! Try again!";
			newStatus = "won";
			this.answer = this.pickNumber();
		} else if (this.guess > this.answer) {
			newStatus = "wrong";
			msg = "too high!";
		} else if (this.guess < this.answer) {
			newStatus = "wrong";
			msg = "too low!";
		} else {
			newStatus = "wrong";
			msg = "I didn't understand that...";
		}

		this.setState({
			message : msg,
			gameStatus: newStatus
		});
	}

	onNumberChange(event) {
		let textBox = event.target;
		this.guess = parseInt(textBox.value, 10);
	}

	render() {
		return(
			
			<form className="Guess" onSubmit={this.onSubmit}>
				<input type="number" onChange={this.onNumberChange} />
				<button>Enter</button>
				<div className={`${this.state.gameStatus} message`}>
					{this.state.message}
				</div>
			</form>

			)
	}
}

export default OddOrEven;