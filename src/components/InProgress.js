import React, { Component } from "react";
import { connect } from "react-redux";

class InProgress extends Component {

  componentWillMount(){

  }

  render(){
    return (
      <div className="column" id="inProgresColumn">
        <h3 className="subtitle">IN PROGRESS</h3>
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
