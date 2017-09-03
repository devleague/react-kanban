import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class InProgress extends Component {


  render(){
    return (
      <div className="column" id="inProgresColumn">
        <h3 className="subtitle">IN PROGRESS</h3>
        <Card
          status="inProgress"
          rightButton="Done"
          leftButton="In Queue"
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

const ConnectedInProgress = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(InProgress);

export default ConnectedInProgress;
