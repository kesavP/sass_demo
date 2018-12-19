import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RedChildComp from './components/RedChildComp';
import BlueChildComp from './components/BlueChildComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RedChildComp/>
        <BlueChildComp/>
      </div>
    );
  }
}

export default App;
