import React, { Component } from 'react';

class Tweet extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: props.startValue,
			id: 0,
			tweets: "Empty here...",
			tweetsArr: []
		}

		this.textChange = this.textChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		console.log(this.state.tweetsArr.push(e.target.tweet.value));
		console.log(this.state.tweetsArr);
		console.log(e.target.tweet.value);

		console.log("BEFORE===>",this.state);

		this.setState({
			tweetsArr: this.state.tweetsArr.push(e.target.tweet.value)
		});

		console.log("AFTER===>",this.state);


		
	}

	textChange(e) {
		console.log(e.target.value);
	}

	render() {
		console.log(this.state)
		return (
				<form onSubmit={this.onSubmit}>

					<h1>TWEET IT</h1>

					<input 
						name="tweet"
						type="text"
						placeholder={this.props.startValue}
						onChange={this.textChange} />

					<button>SEND</button>

					<ul>
						{
							this.state.tweetsArr.map((tweet,index) => {
								return <li key={index}>{tweet}</li>
							})
						}
					</ul>

				</form>
			);
	}
}

export default Tweet;