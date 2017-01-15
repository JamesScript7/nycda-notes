import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//created a new component
import Company from './Company';

class App extends Component {
  render() {
    return (
      <div className="App">
        //do you see the parallelism with Objects!?
        <Company name="Polar Bear" sponsor="Coca-Cola" />
        <Company name="Drumming Rabbit" sponsor="Energizer" />
        <Company name="Tony the Tiger" sponsor="Kellogs" />
      </div>
    );
  }
}

export default App;
