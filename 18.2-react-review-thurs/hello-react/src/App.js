import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//created a new component
import Company from './Company';

//created a second component
import Counter from './Counter';

//cycle through an array
import Flavors from './Flavors';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Company name="Polar Bear" sponsor="Coca-Cola" />
        <Company name="Drumming Rabbit" sponsor="Energizer" />
        <Company name="Tony the Tiger" sponsor="Kellogs" />

        <Counter min="0" max="10" start="5" />
        <Flavors />
      </div>
    );
  }
}

export default App;
