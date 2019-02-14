import React, { Component } from 'react';
import './App.scss';
import Header from '../../components/Header';
import KanbanBoard from '../KanbanBoard';
import AddCard from '../../containers/AddCard';

class App extends Component {
  state = {
    addFormOpen: false
  };

  toggleForm = () => {
    this.setState(prevState => {
      return { addFormOpen: !prevState.addFormOpen };
    });
  };

  closeForm = () => {
    this.setState({ addFormOpen: false });
  };

  render() {
    return (
      <div className="App">

        <Header title='Kanban' show={this.toggleForm} />

        <KanbanBoard />

        {this.state.addFormOpen ? <AddCard show={this.toggleForm} close={this.closeForm} /> : null}
      </div>
    );
  };
};

export default App;
