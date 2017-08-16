import React, { Component } from 'react';
import './App.css';
import Column from '../Column';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Column />
        <Column />
        <Column />
      </div>
    );
  }
}

export default App;
