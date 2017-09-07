import React, { Component } from "react"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editCard } from "../actions";

class Edit extends Component{
  constructor(props) {
    super(props);
    this.state = ({
      title: this.props.title,
      priority: this.props.priority,
      createdBy: this.props.createdBy,
      assignedTo: this.props.assignedTo
    })
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
    let editedCard = {
      title: this.state.title,
      priority: this.state.priority,
      createdBy: this.state.createdBy,
      assignedTo: this.state.assignedTo
    }
    this.props.editCard(this.props.id, editedCard);
    this.props.onHide();
  }

  render(){
    if(!this.props.show){
      return null;
    }
    return(
      <div className="modal is-active">
        <div className="modal-background" onClick={this.props.onHide} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Edit Task</p>
            <button className="delete" onClick={this.props.onHide} />
          </header>
          <section className="modal-card-body">
            <div className="content">

              <div className="field">
                <label className="label">Title</label>
                <input type="text" className="input" value={this.state.title} onChange={this.handleTitle.bind(this)}/>
              </div>

              <div className="field">
                <label className="label">Created By</label>
                <input type="text" className="input" value={this.state.createdBy} onChange={this.handleCreatedBy.bind(this)}/>
              </div>

              <div className="field">
                <label className="label">Assigned To</label>
                <input type="text" className="input" value={this.state.assignedTo} onChange={this.handleAssignedTo.bind(this)}/>
              </div>

              <div className="field">
                <label className="label">Priority</label>
                <div className="control">
                  <div className="select">
                    <select onChange={this.handleDropDown.bind(this)} value={this.state.priority}>
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
                <a className="button" onClick={this.props.onHide}>Cancel</a>
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

Edit.propTypes = {
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
    editCard: (cardId, edited) => {
      dispatch(editCard(cardId, edited))
    }
  }
}

const ConnectedEdit = connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Edit);

export default ConnectedEdit;
