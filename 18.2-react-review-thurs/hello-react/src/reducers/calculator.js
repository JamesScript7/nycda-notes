"use strict";

let createStore = require('redux').createStore;

let
	ADD = "ADD",
	SUBTRACT = "SUBTRACT",
	MULTIPLY = "MULTIPLY",
	DIVIDE = "DIVIDE",
	CLEAR = "CLEAR",
	defaultState = 0;

function calculator(state, action) {
	const currentState = state || defaultState;
	let newState = currentState;
	
	let number = action.number

	switch (action.type) {
	case ADD:
		newState += number;
		break;
	case SUBTRACT:
		newState -= number;
		break;
	case DIVIDE:
		newState /= number;
		break;
	case MULTIPLY:
		newState *= number;
		break;
	case CLEAR:
		newState = 0;
	default:
		return newState;
	}

	return newState
}

let store = createStore(calculator);

store.subscribe(() => {
	console.log("Store changed! New State: ", store.getState())
})


console.log("dispatching action:");
store.dispatch( {type: ADD, number: 100} );
store.dispatch( {type: SUBTRACT, number: 50} );
store.dispatch( {type: MULTIPLY, number: 2} );
store.dispatch( {type: DIVIDE, number: 2} );
store.dispatch( {type: CLEAR} );
store.dispatch( {type: ADD, number: 42} );
