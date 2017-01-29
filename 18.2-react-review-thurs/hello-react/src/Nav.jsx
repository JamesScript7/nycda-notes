import React from 'react';
import { Link } from 'react-router';

export default function() {
	return(
		<ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Hello/Child">Child</Link></li>
          <li><Link to="/Hello/Test">Test</Link></li>
          <li><Link to="/Hello/Example">Example</Link></li>
          <li><Link to="/Company">Company</Link></li>
          <li><Link to="/Counter">Counter</Link></li>
          <li><Link to="/Flavors">Flavors</Link></li>
          <li><Link to="/SayHello">SayHello</Link></li>
          <li><Link to="/OddOrEven">OddorEven</Link></li>
          <li><Link to="/Guess">Guess</Link></li>
          <li><Link to="/FileList">FileList</Link></li>
          <li><Link to="/ListItem">ListItem</Link></li>
          <li><Link to="/Tweet">Tweet</Link></li>
          <li><Link to="/Parent">Parent</Link></li>
        </ul>
	)
}