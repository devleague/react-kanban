import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTask } from '../actions/actions.js';

class EditForm extends Component {

  constructor(props) {
    super(props);
    this.states = {
      card_id: props.card_id,
      title: props.title,
      body: props.body,
      priority_id: props.priority_id,
      status_id: props.status_id,
      created_by: props.created_by,
      assigned_to: props.assigned_to
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      card_id: this.props.carditems.card_id,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    console.log("handleSubmit - EDIT - this.props:", this.props.carditems);
    e.preventDefault();
    console.log('\n Updated!!:', this.state);
    console.log('\n Updated id:', this.props.carditems.card_id);
    this.props.editTask(this.state, this.props.carditems.id);
  }

  render() {
    return (
      <form className="editForm" onSubmit={this.handleSubmit}>
        <label className="editLabel">Task ID:<br />
          <input className="editInput" type="text" name="title" value={this.props.carditems.card_id} readOnly />
        </label>
        <br />
        <label className="editLabel">Title:<br />
          <input className="editInput" onChange={this.handleChange} type="text" name="title" placeholder={this.props.carditems.title} />
        </label>
        <br />
        <label className="editLabel">Body:<br />
          <input className="editInput" onChange={this.handleChange} type="text" name="body" placeholder={this.props.carditems.body} />
        </label>
        <br />
        <label className="editLabel">Priority:<br />
        <input className="editInput" onChange={this.handleChange} type="text" name="priority_id" placeholder={this.props.carditems.priority_id} />

          {/* <select className="editSelect" onChange={this.handleChange} name="priority">
            <option>{this.props.task.priority}</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Blocker">Blocker</option>
          </select> */}
        </label>
        <br />
        <label className="editLabel">Status:<br />
        <input className="editInput" onChange={this.handleChange} type="text" name="status_id" placeholder={this.props.carditems.status_id} />

          {/* <select className="editSelect" onChange={this.handleChange} name="status">
            <option>{this.props.task.status}</option>
            <option value="Queue">Queue</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select> */}
        </label>
        <br />
        <label className="editLabel">Created By:<br />
          <input className="editInput" onChange={this.handleChange} type="text" name="created_by" placeholder={this.props.carditems.created_by} />
        </label>
        <br />
        <label className="editLabel">Assigned To:<br />
          <input className="editInput" onChange={this.handleChange} type="text" name="assigned_to" placeholder={this.props.carditems.assigned_to} />
        </label>

        <button className="editSubmitBtn" type="submit" >Update!</button>

      </form>
    )
  }
}

export default connect()(EditForm);