import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCard } from "../actions"

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
    let newCard = {
      id: `${Math.random()}`,
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
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="blocker">Blocker</option>
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
    }
  }
}

const ConnectedModal = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Modal);

export default ConnectedModal;
