import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';

class newUserModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleNewUserClick = this.handleNewUserClick.bind(this);
  }

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleNewUserClick() {
    let userLogin = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.addUser(userLogin);
    this.props.closeModal();
  }

  render() {
    if (!this.props.modalState) {
      return null;
    }
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.props.closeModal} />
        <div className="modal-card">
          {this.state.allFieldsError ? this.notificationError() : null}
          <header className="modal-card-head">
            <p className="modal-card-title">Create New User</p>
            <button className="delete" onClick={this.props.closeModal} />
          </header>
          <section className="modal-card-body">
            <div className="content">
              <div className="field">
                <label className="label">New Username</label>
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className="input is-success"
                    placeholder="Username"
                    onChange={this.handleUsername}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-user" />
                  </span>
                </div>
              </div>

              <div className="field">
                <label className="label">New Password</label>
                <div className="control has-icons-left">
                  <input
                    type="password"
                    className="input is-success"
                    placeholder="Password"
                    onChange={this.handlePassword}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-key" />
                  </span>
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <div className="field is-grouped">
              <div className="control">
                <a className="button" onClick={this.props.closeModal}>
                  Cancel
                </a>
              </div>
              <div className="control">
                <button
                  className="button is-primary"
                  onClick={this.handleNewUserClick}
                >
                  Submit
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return { users: state.users, auth: state.auth };
};

const mapDispatchtoProps = dispatch => {
  return {
    addUser: user => {
      dispatch(addUser(user));
    }
  };
};

const ConnectedNewUserModal = connect(mapStatetoProps, mapDispatchtoProps)(
  newUserModal
);

export default ConnectedNewUserModal;
