import React, { Component } from 'react';

class Child extends Component {
	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		this.props.chooseGenes(e.target.gmChild.value);
	}

	render() {
		return (
			<div className="Child" onSubmit={this.onSubmit}>
				<form>
				Give your child:
					<input
						type="text"
						name="gmChild"
						placeholder={this.props.protein} />
					<button>Add</button>
				</form>
			</div>
			
			);
	}
}

export default Child;