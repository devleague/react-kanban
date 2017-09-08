import React, { Component } from "react";
import PropTypes from "prop-types";
import  { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { addCard, loadCards } from "../actions"

const Notification = () => {
  return(
    <div className="notification is-danger">
  <p>All fields required!</p>
</div>
  )
}

class Modal extends Component{
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      priority: "",
      createdBy: "",
      assignedTo: "",
      allFieldsError: null
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
    if(this.state.title.length === 0||
      this.state.createdBy.length === 0||
      this.state.assignedTo.length === 0
    ){
      this.setState({
        allFieldsError: "true"
      })
      return null;
    }

    this.setState({
      allFieldsError: null
    })

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
{this.state.allFieldsError ? Notification() : null}
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
                <div className="control has-icons-left">
                  <div className="select">
                    <select onChange={this.handleDropDown.bind(this)}>
                      <option>Select Priority</option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                      <option value="Blocker">Blocker</option>
                    </select>
                  </div>
                  <span className="icon is-small is-left">
                    <i className="fa fa-bars"></i>
                  </span>
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
