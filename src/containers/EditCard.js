import React from 'react'
import { connect } from 'react-redux'
import { editCard } from './App/actions'

class EditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      priority: this.props.priority,
      status: this.props.status,
      createdBy: this.props.createdBy,
      assignedTo: this.props.assignedTo
    }
  }

  titleChange(e) {
    this.setState({ title: e.target.value });
  }

  priorityChange(e) {
    this.setState({ priority: e.target.value });
  }

  statusChange(e) {
    this.setState({ status: e.target.value });
  }

  createdByChange(e) {
    this.setState({ createdBy: e.target.value });
  }

  assignedToChange(e) {
    this.setState({ assignedTo: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.revisedCardStack(this.state);
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div>
      <input id="titleInput" placeholder= "title"value={this.state.title} onChange={this.titleChange.bind(this)} />

      <select id="priorityInput" onChange={this.priorityChange.bind(this)}>
      <option value="low" >Low</option>
      <option value="medium" >Medium</option>
      <option value="high" >High</option>
      <option value="blocker">Blocker</option>
      </select>
      <input id="createdByInput" placeholder= "created by" value={this.state.createdBy} onChange={this.createdByChange.bind(this)} />
      <select id="statusInput" onChange={this.statusChange.bind(this)}>
      <option value="in-queue" >In Queue</option>
      <option value="in-progress" >In Progress</option>
      <option value="done" >Done</option>
      </select>
      <input id="assignedToInput" placeholder= "assigned to" value={this.state.assignedTo} onChange={this.assignedToChange.bind(this)} />
      <button className="editbtn" type="submit">&#9998;</button>
      </div>
      </form>
      </div>
      );
  }
}




const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    revisedCardStack: (text) => {
      dispatch(editCard(text));
    }
  }
}

EditCard = connect(
  mapStateToProps,
  mapDispatchToProps
  )(EditCard);

  export default EditCard;