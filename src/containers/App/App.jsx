import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header';
import KanbanBoard from '../KanbanBoard';


class App extends Component {
  render() {

    return (
      <div className="App">

        <Header title='Kanban' />

        <KanbanBoard />

      </div>
    );
  };
};

export default App;
