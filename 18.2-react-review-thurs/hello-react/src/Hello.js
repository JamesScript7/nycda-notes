import React from 'react';

function Hello(props) {
	return (
		<div className="Hello">
			You are in: {props.params.name}
		</div>
		);
}

export default Hello;