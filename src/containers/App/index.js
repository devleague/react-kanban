import React, { Component } from 'react';
import './App.css';
import Column from '../Column';
import AddCardForm from '../AddCardForm';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Column />
        <Column />
        <Column />
        <AddCardForm />
      </div>
    );
  }
}

export default App;
