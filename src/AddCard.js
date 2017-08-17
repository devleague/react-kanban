import React from 'react'
import { connect } from 'react-redux'
import { addCard } from './actions'

class AddCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      priority: '',
      createdBy: '',
      assignedTo: ''
    };

  }

  handleTaskChange(e) {
    this.setState({ title: e.target.value });
  }
  handlePriorityChange(e) {
    this.setState({ priority: e.target.value });
  }
  handleCreatorChange(e) {
    this.setState({ createdBy: e.target.value });
  }
  handleAssigneeChange(e) {
    this.setState({ assignedTo: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.title.trim() || !this.state.priority.trim() || !this.state.createdBy.trim() || !this.state.assignedTo.trim()) { return; }
    console.log(this.state);
    this.props.onAdd(this.state);
    this.state = '';
    this.setState({
      title: '',
      priority: '',
      createdBy: '',
      assignedTo: ''
    });
  }

  render() {
    return (
      <div className="add_card_container">
        <form className="add_card_form" onSubmit={this.handleSubmit.bind(this)} >
          <div className="runin">Task</div><div className="text"><input id="card_new_task" placeholder="task description" value={this.state.title} onChange={this.handleTaskChange.bind(this)}/></div>
          <div className="runin">Priority</div><div className="text"><input id="card_new_priority" placeholder="priority" value={this.state.priority} onChange={this.handlePriorityChange.bind(this)} /></div>
          <div className="runin">Created By</div><div className="text"><input id="card_created_by" placeholder="created by" value={this.state.createdBy} onChange={this.handleCreatorChange.bind(this)} /></div>
          <div className="runin">Assigned To</div><div className="text"><input id="card_assigned_to" placeholder="assign to" value={this.state.assignedTo} onChange={this.handleAssigneeChange.bind(this)} /></div>
          <div className="runin"></div><div className="text"><button type="submit">Add Card</button></div>
        </form>
      </div>
    );
  }
}

// even though this is doing nothing, we need this to make redux work
const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (newCard) => {
      dispatch(addCard(newCard));
    }
  }
}

AddCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard);

export default AddCard;