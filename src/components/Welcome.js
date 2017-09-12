import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Welcome extends Component {

    render() {
        return (
            <article className="message" id="welcome">
                <div className="message-header">
                    React Kanban!
                </div>
                <div className="message-body">
                    Welcome! Please login!
                </div>
            </article>
        )
    }
}

const mapStatetoProps = (state) => {
    return {auth: state.auth}
}

const mapDispatchtoProps = (dispatch) => {
    return {}
}

const ConnectedWelcome = connect(mapStatetoProps, mapDispatchtoProps)(Welcome);

export default ConnectedWelcome;