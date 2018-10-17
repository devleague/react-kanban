import React, { Component } from 'react';

// import logo from './logo.svg';

import './App.css';
import './Kanban/Forms/Add/Add.css';

import data from './Kanban/Data/data.js';
import Kanban from './Kanban/Kanban.js';
import Add from './Kanban/Forms/Add/Add.js';


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
        <header className="App-Header" id="header">
          KANBAN
          <Add />
        </header>
        <Kanban />
      </div>
    );
  }
}


export default App;
