import React, { Component } from 'react';
import { connect } from "react-redux";
import 'bulma/css/bulma.css';
import './App.css';
import InQueue from "../../components/InQueue.js"
import InProgress from "../../components/InProgress.js"
import Done from "../../components/Done.js"
import Header from "../../components/Header.js"
import { loadCards } from "../../actions"

class App extends Component {

  componentWillMount(){
    this.props.loadCards();
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
    loadCards: (cards) => {
      dispatch(loadCards(cards));
    }
  }
}

const ConnectedApp = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(App);

export default ConnectedApp;
