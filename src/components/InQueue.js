import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCard } from "../actions";

class InQueue extends Component {

  componentWillMount(){

  }

  handleDelete(e){
    this.props.deleteCard(e.target.id);
  }

  render(){
    return (
      <div className="column" id="queueColumn">
        <h3 className="subtitle">IN QUEUE</h3>
        <div className="cardContainer">
          {
            this.props.cards.map((card) => {
              return (
                <div key={card.id} className="card" id="inQueueCard">
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
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item" onClick={this.handleDelete.bind(this)} id={card.title}>Delete</a>
                    <a className="card-footer-item">Next</a>
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
    }
  }
}

const ConnectedInQueue = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(InQueue);

export default ConnectedInQueue;
