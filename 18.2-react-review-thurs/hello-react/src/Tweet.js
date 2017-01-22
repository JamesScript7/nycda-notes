import React, { Component } from 'react';

class Tweet extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: props.startValue,
			tweets: "Empty here..."
		}

		this.tweetArr = [];

		this.textChange = this.textChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		this.tweetArr.push(this.val);

		this.setState({
			tweets: this.val
		})
	}

	textChange(e) {
		this.val = e.target.value;
	}

	render() {
		return (
				<form onSubmit={this.onSubmit}>

					<h1>TWEET IT</h1>

					<input type="text"
						   placeholder={this.props.startValue}
						   onChange={this.textChange} />

					<button>Tweet it!</button>

					<ul>
						{
							this.tweetArr.map(tweet => {
								return <li>{tweet}</li>
							}).reverse()
						}
					</ul>

				</form>
			);
	}
}

export default Tweet;