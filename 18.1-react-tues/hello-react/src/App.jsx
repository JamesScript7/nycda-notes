import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//added Component Link!
import Link from './Link';

class App extends Component {
  constructor(props) {
    super(props)
    // Initialization: One Way
    // this.state = {
    //   message: "Hello World!"
    // }
  }

  // Initialization: Another way
  componentWillMount() {
    this.setState({
      message: "Hello World!"
    })
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onClick={() => this.setState({ message: this.state + "!"})} >{this.state.message}</h2>
        </div>
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
