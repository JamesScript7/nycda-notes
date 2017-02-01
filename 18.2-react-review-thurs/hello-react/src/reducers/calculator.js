"use strict";

let createStore = require('redux').createStore

let add = "ADD";
let subtract = "SUBTRACT";
let divide = "DIVIDE";
let multiply = "MULTIPLY";
let clear = "CLEAR"

let inputOne = 500;
let inputTwo = 100;


function calculator(state, action) {
	let newState = Object.assign({}, state || {});
	
	let valOne = action.valOne;
	let valTwo = action.valTwo;
	let value = action.value;

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
		newState = { value: valOne + valTwo };
		break;
	case subtract:
		newState = { value: valOne - valTwo };
		break;
	case divide:
		newState = { value: valOne / valTwo };
		break;
	case multiply:
		newState = { value: valOne * valTwo };
		break;
	case clear:
		newState = { value: 0 }
	default:
		return newState;
	}

	return newState
}


let store = createStore(calculator);

store.subscribe(() => {
	console.log("Store changed! New State: ", store.getState())
})


const inputA = {
	type: add,
	value: 0,
	valOne: inputOne,
	valTwo: inputTwo
}

const inputB = {
	type: subtract,
	value: 0,
	valOne: inputOne,
	valTwo: inputTwo
}

const inputC = {
	type: divide,
	value: 0,
	valOne: inputOne,
	valTwo: inputTwo
}

const inputD = {
	type: multiply,
	value: 0,
	valOne: inputOne,
	valTwo: inputTwo
}

const inputE = {
	type: clear,
	value: 0
}



console.log("dispatching action:");
store.dispatch(inputA);
store.dispatch(inputE);

store.dispatch(inputB);
store.dispatch(inputE);

store.dispatch(inputC);
store.dispatch(inputE);

store.dispatch(inputD);
store.dispatch(inputE);


