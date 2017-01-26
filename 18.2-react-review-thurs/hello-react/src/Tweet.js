import React, { Component } from 'react';

class Tweet extends Component {
	constructor(props) {
		super(props);

		this.tweets = [];
		
		this.state = {
			value: props.startValue,
			tweets: this.tweets
		}


		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		console.log("BEFORE===>", this.state);

		this.tweets.push(e.target.tweet.value);

		this.setState({
			tweets: this.tweets
		});

		console.log("AFTER===>",this.state);		
	}

	render() {
		return (
				<form onSubmit={this.onSubmit}>

					<h1>TWEET IT</h1>

					<input 
						name="tweet"
						type="text"
						placeholder={this.props.startValue} />

					<button>SEND</button>

					<ul>
						{
							this.state.tweets.map((tweet,index) => {
								return <li key={index}>{tweet}</li>
							}).reverse()
						}
					</ul>

				</form>
			);
	}
}

export default Tweet;