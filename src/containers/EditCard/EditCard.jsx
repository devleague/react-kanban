import React, { Component } from 'react';
import './EditCard.scss';
import { connect } from 'react-redux';
import { editCard } from '../../actions';

class EditCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.card.id,
      title: this.props.card.title,
      body: this.props.card.body,
      priority_id: this.props.card.priority_id,
      status_id: this.props.card.status_id,
      created_by: this.props.card.created_by,
      assigned_to: this.props.card.assigned_to
    };

    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.handleBodyOnChange = this.handleBodyOnChange.bind(this);
    this.handlePriorityOnChange = this.handlePriorityOnChange.bind(this);
    this.handleAssignedOnChange = this.handleAssignedOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  };

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  };

  handleTitleOnChange(e) {
    const value = e.target.value;
    this.setState({ title: value });
  };

  handleBodyOnChange(e) {
    const value = e.target.value;
    this.setState({ body: value });
  };

  handlePriorityOnChange(e) {
    const value = e.target.value;
    this.setState({ priority_id: value });
  };

  handleAssignedOnChange(e) {
    const value = e.target.value;
    this.setState({ assigned_to: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { id, title, body, priority_id, status_id, created_by, assigned_to } = this.state;

    this.props.onEdit({
      id,
      title,
      body,
      priority_id,
      status_id,
      created_by,
      assigned_to
    });

    this.props.closeEdit();
  };

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    };
    this.props.closeEdit();
  };

  render() {
    return (
      <div ref={node => this.node = node}>
        <div className="editCard">
          <h3>Edit Card</h3>
          <form className="editForm">
            Title:
          <input type="text" data-type="title" onChange={this.handleTitleOnChange} value={this.state.title} />
            Body:
          <textarea data-type="body" onChange={this.handleBodyOnChange} value={this.state.body}></textarea>
            Priority:
          <select data-type="priority_id" onChange={this.handlePriorityOnChange}>
              <option value="4">Low</option>
              <option value="3">Medium</option>
              <option value="2">High</option>
              <option value="1">Blocker</option>
            </select>
            Assign to:
          <select data-type="assigned_to" onChange={this.handleAssignOnChange}>
              <option value="0">You</option>
            </select>
            <button onClick={this.handleSubmit}>
              Save Card
          </button>
          </form>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {
    onEdit: (cardData) => {
      dispatch(editCard(cardData));
    }
  };
};

EditCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCard);

export default EditCard;