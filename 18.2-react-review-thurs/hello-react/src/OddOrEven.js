import React, { Component } from 'react';
import Counter from './Counter';


class OddOrEven extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: props.startValue
		}

		this.errorMessage = "That's rather \"Odd\"";

		this.onNumberChange = this.onNumberChange.bind(this);		
	}

	oddOrEven(number) {
		if (number % 2 === 0) {
			return "Even";
		} else if (number % 2 === 1) {
			return "Odd";
		} else {
			return null;
		}
	}

	onNumberChange(event) {
		let newValue = parseInt(event.target.value, 10);
		
		let oddOrEven = this.oddOrEven(newValue);

		this.setState({
			oddOrEven: this.oddOrEven(newValue)
		})
	}

	render() {

		return(
			<div className="OddOrEven">

				<p className="OddOrEven-result">
					<span className={ this.state.oddOrEven }>
						{ this.state.oddOrEven || this.errorMessage }
					</span>
				</p>
				
				<input type="text"
					   placeholder={this.props.startValue}
					   onChange={this.onNumberChange} />

			</div>
		)
	}
}



export default OddOrEven;