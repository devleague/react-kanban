import React, { Component } from 'react';
import './App.scss';
import KanbanBoard from '../KanbanBoard';


class App extends Component {
  render() {
    return (
      <div className="App">

        <KanbanBoard showCard={this.toggleDetail} />

      </div>
    );
  };
};

export default App;
