import './App.css';
import React, { Component } from 'react';
import Card from './components/card';
import Form from './components/form';
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
