import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Cards from './Cards.jsx'
import Header from './Header.jsx'
import { getAllCards } from './actions/actions.js'
import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props)

  }

  //this.props.card to access data
  componentDidMount() {
    this.props.dispatch(getAllCards());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link className="App-title" to="/cards">Kankan</Link>
            <Link className="App-title" to="/character">edit</Link>
            {/* <Link className="App-title" to="/quests/123">Quests</Link> */}
          </header>
          <Route path="/cards" component={() => <Cards />} />
          {/* <Route path="/character" component={Character} />
          <Route path="/quests/:id" component={Quests} /> */}
        </div>
      </Router>
    )
  }
}






export default connect()(App);
