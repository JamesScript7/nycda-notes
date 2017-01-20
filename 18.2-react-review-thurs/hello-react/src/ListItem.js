import React, { Component } from 'react';

export default class ListItem extends Component {

	constructor(props) {
		super(props);

		this.removeFile = this.removeFile.bind(this);

	}

	removeFile(event) {
		console.log(`removeFile`);
		this.props.onDelete();
	}

	render() {
		let props = this.props;

		return (<li className={props.className}>
				<img role="presentation" src="https://upload.wikimedia.org/wikipedia/en/e/ed/Small_logo_splash.png" />
				{props.name}
				{props.type === "directory" ? "/" : ""}
				<button onClick={this.removeFile}>DELETE</button>
			</li>);
	}
}