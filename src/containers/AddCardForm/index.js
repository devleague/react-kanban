import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAddCard } from '../../actions/cardActions';

class AddCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      priority: 'low',
      status: this.props.status,
      createdBy: '',
      assignedTo: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCard(this.state);
    this.props.hideAddForm();
    this.setState({
      title: '',
      priority: 'low',
      status: 'in-queue',
      createdBy: '',
      assignedTo: ''
    });
  }

  handleFieldChange(e) {
    const newState = {};
    const field = e.target.dataset.field;
    newState[field] = e.target.value;

    this.setState(newState);
  }

  render() {
    const { title, priority, status, createdBy, assignedTo } = this.state;
    return (
      <form>
        <input
          type="text"
          data-field="title"
          onChange={this.handleFieldChange}
          value={title}
          placeholder="title"
        />
        <input
          type="text"
          data-field="priority"
          onChange={this.handleFieldChange}
          value={priority}
          placeholder="priority"
        />
        <input
          type="text"
          data-field="status"
          onChange={this.handleFieldChange}
          value={status}
          placeholder="status"
        />
        <input
          type="text"
          data-field="createdBy"
          onChange={this.handleFieldChange}
          value={createdBy}
          placeholder="createdBy"
        />
        <input
          type="text"
          data-field="assignedTo"
          onChange={this.handleFieldChange}
          value={assignedTo}
          placeholder="assignedTo"
        />
        <button type="submit" onClick={this.handleSubmit}>
          submit
        </button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    addCard: bindActionCreators(fetchAddCard, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(AddCardForm);
