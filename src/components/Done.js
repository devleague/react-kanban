import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCard, moveCardLeft } from "../actions";

class Done extends Component {

  handleDelete(e){
    this.props.deleteCard(e.target.id);
  }

  handleMoveCardLeft(e){
    this.props.moveCardLeft(e.target.id)
  }

  render(){
    return (
      <div className="column">
        <h3 className="subtitle">DONE</h3>
        <div className="cardContainer">
          {
            this.props.cards.filter((card) => {
              return card.status === "done"
            })
            .map((card) => {
              return (
                <div key={card.id} className="card" id="doneCard">
                  <header className="card-header">
                    <p className="card-header-title">
                      {card.title}
                    </p>
                    <a className="card-header-icon">
                      <span className="icon">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </a>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      Priority: {card.priority}
                      <br/>
                      Created By: {card.createdBy}
                      <br/>
                      Assigned to: {card.assignedTo}
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item" onClick={this.handleMoveCardLeft.bind(this)} id={card.title}>In Progress</a>
                    <a className="card-footer-item" onClick={this.handleDelete.bind(this)} id={card.title}>Delete</a>
                    <a className="card-footer-item">   </a>
                  </footer>
                </div>
              )
            })
          }
        </div>
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
    deleteCard: (card) => {
      dispatch(deleteCard(card))
    },
    moveCardLeft: (card) => {
      dispatch(moveCardLeft(card))
    }
  }
}

const ConnectedDone = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Done);

export default ConnectedDone;
