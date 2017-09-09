import React, {Component} from 'react';
import {connect} from "react-redux";
import 'bulma/css/bulma.css';
import './App.css';
import Header from "../../components/Header.js";
import {loadCards} from "../../actions";
import Column from "../../components/Column.js";

class App extends Component {

  componentWillMount() {
    this
      .props
      .loadCards();
  }

  render() {
    return (
      <div className="container is-mobile">
        <Header/>
        <div className="columns is-mobile">
          <Column
          status = "inQueue"
          rightButton = "In Progress"
          leftButton = {null} />
          <Column 
          status="inProgress" 
          rightButton="Done" 
          leftButton="In Queue" />
          < Column 
          status="done" 
          rightButton={null} 
          leftButton="In Progress" />
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {cards: state.cards}
}

const mapDispatchtoProps = (dispatch) => {
  return {
    loadCards: (cards) => {
      dispatch(loadCards(cards));
    }
  }
}

const ConnectedApp = connect(mapStatetoProps, mapDispatchtoProps)(App);

export default ConnectedApp;
