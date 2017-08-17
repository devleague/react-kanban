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

  componentDidMount() { }

  componentWillMount() { }

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
    // this.state = '';
    // this.setState(this.state);
    // // this.setState({ card: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <input id="card_new_task" placeholder="task description" value={this.state.title} onChange={this.handleTaskChange.bind(this)} />
          <input id="card_new_priority" placeholder="priority" value={this.state.priority} onChange={this.handlePriorityChange.bind(this)} />
          <input id="card_created_by" placeholder="created by" value={this.state.createdBy} onChange={this.handleCreatorChange.bind(this)} />
          <input id="card_assigned_to" placeholder="assign to" value={this.state.assignedTo} onChange={this.handleAssigneeChange.bind(this)} />
          <button type="submit">Add Card</button>
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