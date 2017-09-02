import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCard, moveCardLeft, moveCardRight } from "../actions";

class InProgress extends Component {

  handleDelete(e){
    this.props.deleteCard(e.target.id);
  }

  handleMoveCardLeft(e){
    this.props.moveCardLeft(e.target.id)
  }

  handleMoveCardRight(e){
    this.props.moveCardRight(e.target.id)
  }

  render(){
    return (
      <div className="column" id="inProgresColumn">
        <h3 className="subtitle">IN PROGRESS</h3>
        <div className="cardContainer">
          {
            this.props.cards.filter((card) => {
              return card.status === "inProgress"
            })
            .map((card) => {
              return (
                <div key={card.id} className="card" id="inProgressCard">
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
                    <a className="card-footer-item" onClick={this.handleMoveCardLeft.bind(this)} id={card.title}>In Queue</a>
                    <a className="card-footer-item" onClick={this.handleDelete.bind(this)} id={card.title}>Delete</a>
                    <a className="card-footer-item" onClick={this.handleMoveCardRight.bind(this)} id={card.title}>Done</a>
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
      dispatch(deleteCard(card));
    },
    moveCardLeft: (card) => {
      dispatch(moveCardLeft(card))
    },
    moveCardRight: (card) => {
      dispatch(moveCardRight(card))
    }
  }
}

const ConnectedInProgress = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(InProgress);

export default ConnectedInProgress;
