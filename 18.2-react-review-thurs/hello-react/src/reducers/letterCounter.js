"use strict";

let createStore = require('redux').createStore

function letterCounter(state, action) {
	// const currentState = state || {};
	let newState = Object.assign({}, state || {});

	if (action.type === "ADD_WORD") {
		let word = action.word

		for (var i=0; i<word.length; i++) {
  			if (newState[word[i]]) {
			    newState[word[i]] += 1;
		  	} else {
		    	newState[word[i]] = 1;
		  	}
		}
		return newState;

	} else {
		return newState;
	}
}


let store = createStore(letterCounter);

store.subscribe(() => {
	console.log("Store changed! New State: ", store.getState())
})

console.log("dispatching action:");

store.dispatch({type: "ADD_WORD", word: "reduxrocks"});

store.dispatch({type: "ADD_WORD", word: "reduxrocks"});

















