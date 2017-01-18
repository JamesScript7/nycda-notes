import React, { Component } from 'react';

class OddOrEven extends Component {

	constructor(props) {
		super(props);

		this.answer = this.pickNumber();

		this.state = {
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

		let msg
		if (this.state.guess == this.answer) {
			msg = "you got it! Try again!";
			this.answer = this.pickNumber();
		} else if (this.state.guess > this.answer) {
			msg = "too high!";
		} else if (this.state.guess < this.answer) {
			msg = "too low!";
		} else {
			msg = "i dunno";
		}

		this.setState({message : msg})
	}

	onNumberChange(event) {
		let newGuess = parseInt(event.target.value, 10);

		this.setState({guess: newGuess});
	}

	render() {
		return(
			
			<form className="Guess" onSubmit={this.onSubmit}>
				<input type="number" onChange={this.onNumberChange} />
				<button> </button>
				<div>{this.state.message}</div>
			</form>

			)
	}
}




export default OddOrEven;