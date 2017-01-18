import React, { Component } from 'react';

class Counter extends Component {

	constructor(props) {
		super(props);

		this.min = parseInt(props.min, 10) || 1;
		this.max = parseInt(props.max, 10) || 10;

		this.state = {
			value: parseInt(props.start, 10) || 1
		};

		if (!props.start) {
			console.warn("Hey, you're missing props.start");
		}

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() {

		if (this.state.value < this.max) {
			let newValue = this.state.value + 1;
			this.setState({value: newValue});
		}

	}

	decrement() {

		if (this.state.value > this.min) {
			this.setState({
				value: this.state.value - 1
			});
		}

	}

	render() {
		return(
			<div className="Counter">

				<h1>Counter Test</h1>

				<div>The minimum is: {this.min}</div>
				<div>The Maximum is: {this.max}</div>

				<button onClick={this.decrement}> - </button>
				<span> {this.state.value} </span>
				<button onClick={this.increment}> + </button>

			</div>
			)
	}
}

export default Counter;