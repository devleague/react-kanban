import React, { Component } from 'react';

// import logo from './logo.svg';

import './App.css';
import './Kanban/Forms/Add/Add.css';

import Kanban from './Kanban/Kanban.js';
import Add from './Kanban/Forms/Add/Add.js';
import { getAllCards } from './actions/actions.js'

import { connect } from 'react-redux';


class App extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    this.props.dispatch(
      getAllCards()
    )
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

export default connect()(App);
