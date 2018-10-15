import React, { Component } from 'react';

// import logo from './logo.svg';

import './App.css';

import data from './Kanban/Data/data.js';
import Kanban from './Kanban/Kanban.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: data.map(card => { return card.status })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-Header">
          KANBAN
          </header>
        <Kanban />
      </div>
    );
  }
}


export default App;
