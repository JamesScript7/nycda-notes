"use strict";

let createStore = require('redux').createStore
// import {createStore } from 'redux';

function counter (state, action) {
	let currentState = state || 0;

	switch (action.type) {
	case 'INCREMENT':
		return currentState + 1
	case 'DECREMENT':
		return currentState - 1
	default:
		return currentState
	}
}

let store = createStore(counter);

store.subscribe(() => {
	console.log("Store changed! New State: ", store.getState())
})

const ACTION = { type: 'INCREMENT' }

console.log("dispatching action:");
store.dispatch(ACTION);

console.log("dispatching action:");
store.dispatch(ACTION);

console.log("dispatching action:");
store.dispatch(ACTION);