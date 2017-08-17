import React from 'react'
import { connect } from 'react-redux'
import { addCard } from './App/actions'

class AddCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      priority: 'low',
      status: 'in-queue',
      createdBy: '',
      assignedTo: ''
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
    this.props.newCardAdd({ ...this.state});
    this.setState({
      title: '',
      priority: 'low',
      status: 'in-queue',
      createdBy: '',
      assignedTo: ''
    });

  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)} >
      <div>
      <input id="titleInput" placeholder= "title"value={this.state.title} onChange={this.titleChange.bind(this)} />

      <select id="priorityInput" onChange={this.priorityChange.bind(this)}>
      <option value="low" >Low</option>
      <option value="medium" >Medium</option>
      <option value="high" >High</option>
      <option value="blocker">Blocker</option>
      </select>

      <input id="createdByInput" placeholder= "created by" value={this.state.createdBy} onChange={this.createdByChange.bind(this)} />
      <input id="assignedToInput" placeholder= "assigned to" value={this.state.assignedTo} onChange={this.assignedToChange.bind(this)} />
      <button type="submit">Add Card</button>
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
    newCardAdd: (text) => {
      dispatch(addCard(text));
    }
  }
}

AddCard = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AddCard);

  export default AddCard;