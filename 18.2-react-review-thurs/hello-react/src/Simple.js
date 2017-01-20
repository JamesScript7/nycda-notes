import React, { Component } from 'react';

const Simple = function(props) {
	return (
		<div className="Simple">
			<p>Simple, huh</p>
			<p>{props.extra}</p>
		</div>
		);
}