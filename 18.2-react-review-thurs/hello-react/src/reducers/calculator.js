"use strict";

let createStore = require('redux').createStore

let add = "ADD";
let subtract = "SUBTRACT";
let multiply = "MULTIPLY";
let divide = "DIVIDE";
let clear = "CLEAR"

function calculator(state, action) {
	const currentState = state || 0;
	let newState = currentState;
	
	let number = action.number

	// if (action.type === add) {
	// 	newState = valOne + valTwo;
	// } else if (action.type === subtract) {
	// 	newState = valOne - valTwo;
	// } else if (action.type === divide) {
	// 	newState = valOne / valTwo;
	// } else if (action.type === multiply) {
	// 	newState = valOne * valTwo;
	// } else {
	// 	return newState
	// }

	switch (action.type) {
	case add:
		newState += number;
		break;
	case subtract:
		newState -= number;
		break;
	case divide:
		newState /= number;
		break;
	case multiply:
		newState *= number;
		break;
	case clear:
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

store.dispatch( {type: add, number: 100} );
store.dispatch( {type: subtract, number: 50} );
store.dispatch( {type: multiply, number: 2} );
store.dispatch( {type: divide, number: 2} );
store.dispatch( {type: clear} );
store.dispatch( {type: add, number: 42} );




