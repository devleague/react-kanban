import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class InQueue extends Component {

  render(){
    return (
      <div className="column" id="queueColumn">
        <h3 className="subtitle">IN QUEUE</h3>
        <Card
          status="inQueue"
          rightButton="In Progress"
          leftButton={null}
        />
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    cards: state.cards
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {

  }
}

const ConnectedInQueue = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(InQueue);

export default ConnectedInQueue;
