"use strict";

let createStore = require('redux').createStore

function tweetCounter(state, action) {
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

let store = createStore(tweetCounter);

store.subscribe(() => {
	console.log("Store changed! New State: ", store.getState())
})

store.dispatch({type: "ADD_WORD", word: "reduxrocks"});