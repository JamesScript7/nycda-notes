import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';

//Added
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

//Moved all components from App.js into here
import Company from './Company';

//created a second component
import Counter from './Counter';

//cycle through an array
import Flavors from './Flavors';

//say hello!
import SayHello from './sayHello';

import OddOrEven from './OddOrEven';

import Guess from './Guess';

//Parent&Child example
import FileList from './FileList';
import ListItem from './ListItem';

//Cycling through a list (connected to flavor)
import Hello from './Hello';

//Sunday Workshop
import Tweet from './Tweet';
import Parent from './Parent';

//REDUX EXAMPLE
import Status from './components/Status';
import { createStore } from 'redux';

import reducer from './reducers/updates';

const store = createStore(reducer);


ReactDOM.render(
  <Router history={hashHistory} store={store}>

	<Route path="/" component={App}>
		<IndexRoute component={Company} />
		<Route path="/Company" component={Company} />
		<Route path="/Hello/:name" component={Hello} />
		<Route path="/Counter" component={Counter} />
		<Route path="/Flavors" component={Flavors} />
		<Route path="/SayHello" component={SayHello} />
		<Route path="/OddOrEven" component={OddOrEven} />
		<Route path="/Guess" component={Guess} />
		<Route path="/FileList" component={FileList} />
		<Route path="/ListItem" component={ListItem} />
		<Route path="/Tweet" component={Tweet} />
		<Route path="/Parent" component={Parent} />

		<Route path="/Status" component={Status} />
	</Route>

  </Router>,
  document.getElementById('root')
);