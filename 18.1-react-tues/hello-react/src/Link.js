import React, { Component } from 'react';

//moved a function to a different file
import test from './test'

class Link extends Component {
  render() {

    return (
      <div>
        What if {this.props.name} was a <a href={this.props.href}>{test(this.props.name)}</a>
      </div>
    );

  }
}

export default Link;