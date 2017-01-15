import React, { Component } from 'react';

class Company extends Component {

  constructor(props) {
  	super(props);
  	console.log("in Company constructor");
  	console.log(props);

  	// getting into state
  	// this.state = {};

  	//for it to point to component not the event handler...
  	this.speak = this.speak.bind(this);
  }

  speak() {
  	console.log("in speak");
  	console.log(this);
  	alert(this.props.sponsor);
  }

  render() {
    return (
    	<div className={this.props.name + this.props.sponsor}>
    		The {this.props.name} is sponsored by...
    		<div>
    			<button onClick={this.speak}>Find Out</button>
    		</div>
    	</div>
    );
  }
}

export default Company