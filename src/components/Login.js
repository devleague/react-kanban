import React, {Component} from "react";
import {connect} from "react-redux";
import { Redirect } from "react-router-dom";
import {authUser} from "../actions";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }

    }

    handleUsername(e) {
        this.setState({username: e.target.value})
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
    }

    handleLoginClick() {
        let userLogin = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.authUser(userLogin);

    }

    render() {
        if(this.props.auth){
            return (
                <Redirect push to="/protected"/>
            )
        } else {
        return (
            <div className="container" id="login">
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left">
                        <input
                            type="text"
                            className="input is-success"
                            placeholder="Username"
                            onChange={this
                            .handleUsername
                            .bind(this)}/>
                        <span className="icon is-small is-left">
                            <i className="fa fa-user"/>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left">
                        <input
                            type="password"
                            className="input is-success"
                            placeholder="Password"
                            onChange={this
                            .handlePassword
                            .bind(this)}/>
                        <span className="icon is-small is-left">
                            <i className="fa fa-key"/>
                        </span>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button
                            className="button is-primary"
                            onClick={this
                            .handleLoginClick
                            .bind(this)}>Log In</button>
                    </div>
                    <div className="control">
                        <button className="button is-link">Cancel</button>
                    </div>
                </div>
            </div>

        )
    }
}

}

const mapStatetoProps = (state) => {
    return {users: state.users, auth: state.auth}
}

const mapDispatchtoProps = (dispatch) => {
    return {
        authUser: (user) => {
            dispatch(authUser(user))
        }
    }
}

const ConnectedLogin = connect(mapStatetoProps, mapDispatchtoProps)(Login);

export default ConnectedLogin;