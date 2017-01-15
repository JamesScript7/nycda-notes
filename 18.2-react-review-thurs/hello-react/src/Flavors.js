import React, { Component } from 'react';

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
		this.setState({value: newValue});
	}

	next() {
		if (this.state.value < (this.flavors.name.length - 1)) {
			let newValue = this.state.value + 1;
			this.setState({value: newValue});
		} else {
			this.setState({value: 0 });
		}
	}

	render() {
		return(
			<div>
				<h1>
					Check out some flavors!
				</h1>

				<div>Flavors:</div>
				<h3> {this.flavors.name[this.state.value]} </h3>
				<button onClick={this.prev}>prev</button>
				<button onClick={this.next}>next</button>

			</div>
			)

	}
}

export default Flavors;