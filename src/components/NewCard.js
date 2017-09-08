import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCard, loadCards } from "../actions"

class Modal extends Component{
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      priority: "",
      createdBy: "",
      assignedTo: ""
    }
  }

  handleTitle(e){
    this.setState({
      title: e.target.value
    })
  }

  handleCreatedBy(e){
    this.setState({
      createdBy: e.target.value
    })
  }

  handleAssignedTo(e){
    this.setState({
      assignedTo: e.target.value
    })
  }

  handleDropDown(e){
    this.setState({
      priority: e.target.value
    })
  }

  handleSubmitClick(){
    console.log(typeof this.state.title)
    console.log(this.state.title.length)
    let newCard = {
      title: this.state.title,
      priority: this.state.priority,
      status: "inQueue",
      createdBy: this.state.createdBy,
      assignedTo: this.state.assignedTo
    }

    this.props.addCard(newCard);
    this.props.closeModal();
  }

  render(){
    if(!this.props.modalState){
      return null;
    }
    return(
      <div className="modal is-active">
        <div className="modal-background" onClick={this.props.closeModal} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">New Task</p>
            <button className="delete" onClick={this.props.closeModal} />
          </header>
          <section className="modal-card-body">
            <div className="content">

              <div className="field">
                <label className="label">Title</label>
                <input type="text" className="input" placeholder="Title" onChange={this.handleTitle.bind(this)}/>
              </div>

              <div className="field">
                <label className="label">Created By</label>
                <input type="text" className="input" placeholder="Created By" onChange={this.handleCreatedBy.bind(this)}/>
              </div>

              <div className="field">
                <label className="label">Assigned To</label>
                <input type="text" className="input" placeholder="Assigned To" onChange={this.handleAssignedTo.bind(this)}/>
              </div>

              <div className="field">
                <label className="label">Priority</label>
                <div className="control">
                  <div className="select">
                    <select onChange={this.handleDropDown.bind(this)}>
                      <option>Select Priority</option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                      <option value="Blocker">Blocker</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>
          </section>
          <footer className="modal-card-foot">
            <div className="field is-grouped">
              <div className="control">
                <a className="button" onClick={this.props.closeModal}>Cancel</a>
              </div>
              <div className="control">
                <button className="button is-primary" onClick={this.handleSubmitClick.bind(this)}>Submit</button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  modalState: PropTypes.bool,
  title: PropTypes.string
}

const mapStatetoProps = (state) => {
  return {
    cards: state.cards
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    addCard: (card) => {
      dispatch(addCard(card))
    },
    loadCards: (cards) => {
      dispatch(loadCards(cards))
    }
  }
}

const ConnectedModal = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Modal);

export default ConnectedModal;
