import React, {Component} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import NewCard from "./NewCard";
import Board from "./Board.js";
import Login from "./Login.js";
import Welcome from "./Welcome.js";
import {logUserOut} from "../actions";
const browserHistory = Router.browserHistory;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
      isAuthenticated: this.props.auth
    }

    this.toggleModal = this
      .toggleModal
      .bind(this);
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return {modalState: newState};
    });
  }

  requireAuth(nextState, replace) {
    const token = window.sessionStorage.token;
    if (!token) {
      replace("/login");
    }
  }

  
  handleLogoutClick(){
    this.props.logUserOut();
  }

  logInOut(status) {
    if (!this.props.auth) {
      return <div className="level-item">
        <Link to="/login" replace>Log In</Link>
      </div>
    } else {
      return <div className="level-item">
        <a onClick={this.handleLogoutClick.bind(this)}>Log Out</a>
      </div>
    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <div className="container is-mobile">
          <nav className="level is-mobile" id="header">
            <div className="level-left">
              <div className="level-item">
                <Link to="/protected" replace>KANBAN</Link>
              </div>
              {this.logInOut()}
            </div>
            <div className="level-right">
              <button onClick={this.toggleModal} className="button is-dark">New Task</button>
            </div>
            <NewCard closeModal={this.toggleModal} modalState={this.state.modalState}></NewCard>
          </nav>
          <Route path="/" component={Welcome}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute authed={this.props.auth} path="/protected" component={Board}/>

        </div>
      </Router>
    )
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
  return {cards: state.cards, users: state.users, auth: state.auth}
}

const mapDispatchtoProps = (dispatch) => {
  return {
    logUserOut: () => {
      dispatch(logUserOut())
    }
  }
}

const ConnectedHeader = connect(mapStatetoProps, mapDispatchtoProps)(Header);

export default ConnectedHeader;
