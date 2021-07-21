import './App.css';
import React, { Component } from 'react';
import Card from './components/card';
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
