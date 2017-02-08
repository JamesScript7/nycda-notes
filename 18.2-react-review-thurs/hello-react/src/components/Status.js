import React, { Component } from 'react';
import StatusForm from './StatusForm';

import store from '../store';

class Status extends Component {
	constructor(props) {
		super(props);

		this.state = {
			statusUpdates: []
		};

		// this.addNewStatus = this.addNewStatus.bind(this);
	}

	componentDidMount() {
		store.subscribe(() => {
			let reduxState = store.getState();

			this.setState({ reduxState });
		})
}

	render() {
		return (
			<div className="Status">

				<StatusForm />

				<ul>
					{
						this.statusUpdates.map((text,index) => {
							return <li key={"item-" + (index + 1)}>{text}</li>
						}).reverse()
					}
				</ul>
			</div>
			);
	}
}

export default Status;