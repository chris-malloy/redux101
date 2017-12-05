import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// containers
import Students from './containers/Students.jsx';

class App extends Component {
  render() {
	return (
		<div className="App">
			<Students />
		</div>
	);
  }
}

export default App;
