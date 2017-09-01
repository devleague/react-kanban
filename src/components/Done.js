import React, { Component } from "react";
import { connect } from "react-redux";

class Done extends Component {

  componentWillMount(){

  }

  render(){
    return (
      <div className="column">
        <h3 className="subtitle">DONE</h3>
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
