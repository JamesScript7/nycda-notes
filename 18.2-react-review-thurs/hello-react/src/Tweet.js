import React, { Component } from 'react';
import TweetForm from './TweetForm';

class Tweet extends Component {
	constructor(props) {
		super(props);

		this.tweets = [];

		this.state = {
			value: props.startValue,
			tweets: this.tweets,
			test: []
		}

		this.addNewStatus = this.addNewStatus.bind(this);
	}

	addNewStatus(newStatus) {

		this.tweets.push(newStatus);

		this.setState({
			tweets: this.tweets
		});

	}

	render() {
		return (
			<div className="Tweet">

				<TweetForm addNewStatus={this.addNewStatus}/>

				<ul>
					{
						this.state.tweets.map((tweet,index) => {
							return <li key={"item-" + (index + 1)}>{tweet}</li>
						}).reverse()
					}
				</ul>
			</div>
			);
	}
}

export default Tweet;