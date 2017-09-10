import React, {Component} from 'react';
import {connect} from "react-redux";
import 'bulma/css/bulma.css';
import './App.css';
import Header from "../../components/Header.js";
import {loadCards, checkUser} from "../../actions";


class App extends Component {

  componentWillMount() {
    this
      .props
      .loadCards();
  }

  componentDidMount(){
    this.props.checkUser();
  }

  render() {
    return (
      <div className="container is-mobile">
        <Header/>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {cards: state.cards, auth: state.auth}
}

const mapDispatchtoProps = (dispatch) => {
  return {
    loadCards: (cards) => {
      dispatch(loadCards(cards));
    },
    checkUser: () => {
      dispatch(checkUser());
    }
  }
}

const ConnectedApp = connect(mapStatetoProps, mapDispatchtoProps)(App);

export default ConnectedApp;
