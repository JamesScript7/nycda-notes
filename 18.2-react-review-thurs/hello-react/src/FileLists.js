import React, { Component } from 'react';
import ListItem from './ListItem';

class FileLists extends Component {
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
		this.directory.pop();

		this.setState({
			directory: this.directory
		});
	}

	render() {
		var directoriesToRender = [];

		this.state.directory.forEach(file => {
			directoriesToRender.push(
				<ListItem key={file.id} name={file.name} type="directory" onDelete={this.deleteFile} />
				);
		});

		return (
				<div className="FileList">
					<h1>
						File Lists
					</h1>
					<ul>
						{directoriesToRender.map(list => list)}
						{/*this.props.children*/}
					</ul>
				</div>
		)
	}
}

export default FileLists;
