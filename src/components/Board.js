import React, {Component} from 'react';
import Column from "./Column.js";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Board extends Component {

    render() {
        if (this.props.auth) {
            return (
                <div className="columns is-mobile">
                    < Column status="inQueue" rightButton="In Progress" leftButton={null}/>
                    <Column status="inProgress" rightButton="Done" leftButton="In Queue"/>
                    < Column status="done" rightButton={null} leftButton="In Progress"/>
                </div>
            )

        } else {
            return (<Redirect push to="/login"/>)
        }
    }
}

const mapStatetoProps = (state) => {
    return {auth: state.auth}
}

const mapDispatchtoProps = (dispatch) => {
    return {}
}

const ConnectedBoard = connect(mapStatetoProps, mapDispatchtoProps)(Board);

export default ConnectedBoard;