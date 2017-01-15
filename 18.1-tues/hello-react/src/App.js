import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//added Component Link!
import Link from './Link';

class App extends Component {
  render() {
    let x = 42;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="test">1 + 1 = {x}</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Link name="Zelda" />
        <Link name="Link" />
        <Link name="Mario" href="http://www.mariomayhem.com/fun/mario_jokes/" />


      </div>
    );
  }
}

export default App;
