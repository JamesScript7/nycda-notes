import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//created a new component
import Company from './Company';

//created a second component
import Counter from './Counter';

//cycle through an array
import Flavors from './Flavors';

//say hello!
import SayHello from './sayHello';

import OddOrEven from './OddOrEven';

import Guess from './Guess'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Company name="Polar Bear" sponsor="Coca-Cola" />
        <Company name="Drumming Rabbit" sponsor="Energizer" />
        <Company name="Tony the Tiger" sponsor="Kellogs" />

        <Counter min="0" max="10" />
        <Counter min="45" start="50" max="65" />
        
        <Flavors />

        <SayHello name="Class" />

        <OddOrEven startValue="5" />

        <Guess />

      </div>
    );
  }
}

export default App;
