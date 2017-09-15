import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NewCard from './NewCard';
import { logUserOut, loadUsers } from '../actions';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
      isAuthenticated: this.props.auth
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  }

  requireAuth(nextState, replace) {
    const token = window.sessionStorage.token;
    if (!token) {
      replace('/login');
    }
  }

  handleLogoutClick() {
    this.props.logUserOut();
    window.location.reload();
  }

  logInOut(status) {
    if (!this.props.auth) {
      return (
        <div className="level-item">
          <Link to="/login" replace>
            Log In
          </Link>
        </div>
      );
    } else {
      return (
        <div className="level-item">
          <a onClick={this.handleLogoutClick.bind(this)}>Log Out</a>
        </div>
      );
    }
  }

  newTaskButton(status) {
    if (!status) {
      return null;
    } else {
      return (
        <div className="level-right">
          <button onClick={this.toggleModal} className="button is-dark">
            New Task
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container is-mobile">
        <nav className="level is-mobile" id="header">
          <div className="level-left">
            <div className="level-item">KANBAN</div>
            {this.logInOut(this.props.auth)}
          </div>
          <p className="level-item has-text-centered">
            {this.props.auth ? `Hello ${this.props.auth.username}!` : null}
          </p>
          {this.newTaskButton(this.props.auth)}
          <NewCard
            closeModal={this.toggleModal}
            modalState={this.state.modalState}
          />
        </nav>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return { cards: state.cards, users: state.users, auth: state.auth };
};

const mapDispatchtoProps = dispatch => {
  return {
    logUserOut: () => {
      dispatch(logUserOut());
    },
    loadUsers: () => {
      dispatch(loadUsers());
    }
  };
};

const ConnectedHeader = connect(mapStatetoProps, mapDispatchtoProps)(Header);

export default ConnectedHeader;
