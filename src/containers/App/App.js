import React, { Component } from 'react';
import { connect } from "react-redux";
import 'bulma/css/bulma.css'
import './App.css';
import InQueue from "../../components/InQueue.js"
import InProgress from "../../components/InProgress.js"
import Done from "../../components/Done.js"
import Header from "../../components/Header.js"

class App extends Component {

  componentWillMount(){
    let inQueueCard = {
      id: "123",
      title: "Work on client side first!",
      priority: "High",
      status: "inQueue",
      createdBy: "DevLeague",
      assignedTo: "Jeff"
    }

    let inProgressCard = {
      id: "33243",
      title: "CSS!",
      priority: "High",
      status: "inProgress",
      createdBy: "DevLeague",
      assignedTo: "Jeff"
    }

    let doneCard = {
      id: "23432",
      title: "NPM setup!",
      priority: "High",
      status: "done",
      createdBy: "DevLeague",
      assignedTo: "Jeff"
    }

    this.props.cards.push(inQueueCard);
    this.props.cards.push(inProgressCard);
    this.props.cards.push(doneCard);
  }

  render() {
    return (
      <div className="container is-mobile">
        <Header />
        <div className="columns is-mobile">
          <InQueue/>
          <InProgress/>
          <Done/>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    cards: state.cards
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {

  }
}

const ConnectedApp = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(App);

export default ConnectedApp;
