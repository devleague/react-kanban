import React, {Component} from "react";
import {connect} from "react-redux";
import Card from "./Card";

class Column extends Component {

    columnType(status) {
        switch (status) {
            case "inQueue":
                return {id: "inQueueColumn", title: "IN QUEUE"};
            case "inProgress":
                return {id: "inProgressColumn", title: "IN PROGRESS"};
            case "done":
                return {id: "doneColumn", title: "DONE"};
            default:
                return null;
        }
    }

    render() {
        return (
            <div className="column" id={this.columnType(this.props.status).id}>
                <h3 className="subtitle">{this.columnType(this.props.status).title}</h3>
                <Card
                    status={this.props.status}
                    rightButton={this.props.rightButton}
                    leftButton={this.props.leftButton}/>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {cards: state.cards}
}

const mapDispatchtoProps = (dispatch) => {
    return {}
}

const ConnectedColumn = connect(mapStatetoProps, mapDispatchtoProps)(Column);

export default ConnectedColumn;
