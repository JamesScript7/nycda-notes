import React, { Component } from 'react';
import ListItem from './ListItem';

export default class FileList extends Component {
	constructor(props) {
		super(props);

		this.directory = [{
			id: '1',
			name: 'Dir 1'
		}, {
			id: '2',
			name: 'Dir 2'
		}, {
			id: '3',
			name: 'Dir 3'
		}];

		this.state = {
			directory: this.directory
		}

		this.deleteFile = this.deleteFile.bind(this);

	}

	deleteFile() {
		console.log("FileList.deleteFile");
		console.log(this);

		this.directory.pop();
		
		this.setState({ directory: this.directory});

		console.log(this.directory);
	}

	render() {
		var directoriesToRender = [];

		this.directory.forEach(file => {
			directoriesToRender.push(
				<ListItem key={file.id} name={file.name} type="directory" onDelete={this.deleteFile} />
				);
		});

		return (<ul>
					{directoriesToRender}
					{this.props.children}
				</ul>);
	}
}