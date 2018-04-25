import React, { Component } from 'react';

class ListItem extends Component {
	constructor(props) {
		super(props);

		this.removeFile = this.removeFile.bind(this);
	}

	removeFile(event) {
		this.props.onDelete();
	}

	render() {
		let props = this.props;

		return (<li className={props.name}>
				<img role="presentation" src="https://upload.wikimedia.org/wikipedia/en/e/ed/Small_logo_splash.png" />
				{props.name}
				{props.type === "directory" ? "/" : ""}
				<button onClick={this.removeFile}>DELETE</button>
			</li>);
	}
}

export default ListItem;
