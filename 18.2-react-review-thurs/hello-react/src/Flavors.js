import React, { Component } from 'react';
// import Hello from './Hello';

class Flavors extends Component {

	constructor(props) {
		super(props);

		this.start = parseInt(props.start, 10) || 0;

		this.state = {
			value: parseInt(props.start, 10) || 0
		}

		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);

		this.flavors = {
			name: ["Mocha", "Caramel", "Peppermint", "Green Tea", "Chai"]
		}

	}


	prev() {
		if (this.state.value <= 0) {
			return this.setState({ value: this.flavors.name.length - 1});
		}
		let newValue = this.state.value - 1;
		console.log(newValue);
		this.setState({value: newValue});
	}

	next() {
		let newValue = (this.state.value + 1) % this.flavors.name.length;
		console.log(newValue);
		this.setState({value: newValue});
	}

	render() {
		return(
			<div className="Flavors">
				<h1>
					Check out some flavors!
				</h1>
				
				{/*
				<h3>From Hello:</h3>
				<Hello name={this.flavors.name[this.state.value]} />
				*/}

				<h3 className="from-flavor"> From Flavors: {this.flavors.name[this.state.value]} </h3>
				<button onClick={this.prev}>prev</button>
				<button onClick={this.next}>next</button>

			</div>
			)

	}
}

export default Flavors;