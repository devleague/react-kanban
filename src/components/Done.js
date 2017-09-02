import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class Done extends Component {

  render(){
    return (
      <div className="column">
        <h3 className="subtitle">DONE</h3>
        <Card
          status="done"
          rightButton={null}
          leftButton="In Progress"
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

const ConnectedDone = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Done);

export default ConnectedDone;
