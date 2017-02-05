import React, { Component } from 'react';

import actions from '../actions/addStatus';

import store from '../store';


class StatusForm extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		// this.props.addNewStatus(e.target.status.value);
		const action = actions.addStatus(e.target.status.value)

		store.dispatch(action);
	}

	render() {
		return (
				<form className="StatusForm" onSubmit={this.onSubmit}>

					<h1>My Status</h1>

					<input 
						name="status"
						type="text" />

					<button>SEND</button>
					
				</form>
			);
	}
}

export default StatusForm;