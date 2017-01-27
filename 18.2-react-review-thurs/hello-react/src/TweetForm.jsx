import React, { Component } from 'react';

class TweetForm extends Component {
	constructor(props) {
		super(props);


		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		this.props.addNewStatus(e.target.tweet.value);
	}

	render() {
		return (
				<form className="TweetForm" onSubmit={this.onSubmit}>

					<h1>TWEET IT</h1>

					<input 
						name="tweet"
						type="text"
						placeholder={this.props.startValue} />

					<button>SEND</button>
				</form>
			);
	}
}

export default TweetForm;