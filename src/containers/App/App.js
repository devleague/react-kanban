import React, {Component} from 'react';
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {loadCards, checkUser} from "../../actions";
import 'bulma/css/bulma.css';
import './App.css';
import Header from "../../components/Header.js";
import Login from "../../components/Login.js";
import Board from "../../components/Board.js";
const browserHistory = Router.browserHistory;

class App extends Component {

  componentWillMount() {
    this
      .props
      .loadCards();
  }

  componentDidMount() {
    this
      .props
      .checkUser();
  }

  render() {
    return (
      <Router history={browserHistory}>
        <div className="container is-mobile">
          <Header/> 
          <Login/>
          <PrivateRoute authed={this.props.auth} path="/protected" component={Board}/>
        </div>
      </Router>
    );
  }
}

function PrivateRoute({
  component: Component,
  authed,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => authed
      ? <Component {...props}/>
      : <Redirect
        push
        to={{
        pathname: '/login',
        state: {
          from: props.location
        }
      }}/>}/>
  )
}

const mapStatetoProps = (state) => {
  return {cards: state.cards, auth: state.auth, users: state.users}
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
