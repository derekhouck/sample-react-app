import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const user = {
	firstName: 'Harper',
	lastName: 'Perez'
};

class Welcome extends React.Component {
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}

class App extends Component {
  render() {
    return (
		<div>
			<Welcome name={formatName(user)} />
			<Welcome name="Sara" />
			<Welcome name="Cahal" />
		</div>
    );
  }
}

export default App;
