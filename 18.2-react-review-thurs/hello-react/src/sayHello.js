import React, { Component } from 'react';

class SayHello extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			name: props.name
		}

		this.onNameChange = this.onNameChange.bind(this);
		this.onClick = this.onClick.bind(this);

	}

	onNameChange(event) {
		let newName = event.target.value || this.props.name;
		
		this.setState({
			name: newName
		})
	}

	onClick(event) {
		event.preventDefault();
		alert(this.state.name);
	}

	render() {
		return (
			<form className="SayHello">

				<h1>Hi, {this.state.name}!</h1>

				<div>
					<input type="text"
						   placeholder={this.props.name}
						   onChange={this.onNameChange} />

					<button onClick={this.onClick}>Click me!</button>
				</div>

			</form>
			);
	}
}


export default SayHello;