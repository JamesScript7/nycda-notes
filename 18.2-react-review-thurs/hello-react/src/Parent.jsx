import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			response: []
		}

		this.chooseGenes = this.chooseGenes.bind(this);
	}

	chooseGenes(res) {

		let genes = this.state.response

		genes.push(res + this.state.response.length);

		this.setState({
			response: genes
		})
	}

	render() {
		return (
			<div className="Parent">
				<h1>Genetically Modify Your Child!</h1>

				<Child protein="A" chooseGenes={this.chooseGenes} />
				<Child protein="T" chooseGenes={this.chooseGenes} />
				<Child protein="G" chooseGenes={this.chooseGenes} />
				<Child protein="C" chooseGenes={this.chooseGenes} />

				<div>Code your child: {this.state.response} - {this.props.protein}</div>
			</div>
			);
	}
}

export default Parent;