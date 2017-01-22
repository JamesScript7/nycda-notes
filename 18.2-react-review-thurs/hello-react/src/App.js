import React, { Component } from 'react';
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

import Guess from './Guess';

//Parent&Child example
import FileList from './FileList';
import ListItem from './ListItem';

//Cycling through a list (connected to flavor)
import Hello from './Hello';

//Sunday Workshop
import Tweet from './Tweet';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Company name="Polar Bear" sponsor="Coca-Cola" />
        <Company name="Drumming Rabbit" sponsor="Energizer" />
        <Company name="Tony the Tiger" sponsor="Kellogs" />

        <Counter min="0" start="5" max="10" />
        <Counter min="45" start="50" max="65" />
        
        <Flavors />

        <SayHello name="Class" />

        <OddOrEven startValue="5" />

        <Guess />

        <FileList>
          <ListItem name="File 1" type="file" />
          <ListItem name="File 2" type="file" />
          <ListItem name="File 3" type="file" />
        </FileList>

        <Hello />

        <Tweet startValue="Enter a Tweet!" />

      </div>
    );
  }
}

export default App;
