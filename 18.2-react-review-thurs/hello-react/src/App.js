import React, { Component } from 'react';
import './App.css';

//created a new component
// import Company from './Company';

// //created a second component
// import Counter from './Counter';

// //cycle through an array
// import Flavors from './Flavors';

// //say hello!
// import SayHello from './sayHello';

// import OddOrEven from './OddOrEven';

// import Guess from './Guess';

// //Parent&Child example
// import FileList from './FileList';
// import ListItem from './ListItem';

// //Cycling through a list (connected to flavor)
// import Hello from './Hello';

// //Sunday Workshop
// import Tweet from './Tweet';
// import Parent from './Parent';

import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Nav />

        {this.props.children}

      </div>
    );
  }
}

export default App;
