import React, { Component } from 'react';
import './AddCard.scss';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: '',
      body: '',
      priority_id: '4',
      status_id: '1',
      created_by: '0',
      assigned_to: '0'
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

    this.props.onAdd({
      id,
      title,
      body,
      priority_id,
      status_id,
      created_by,
      assigned_to
    });

    this.setState({
      id: '0',
      title: '',
      body: '',
      priority_id: '4',
      status_id: '1',
      created_by: '0',
      assigned_to: '0'
    });
    this.props.showCard();
    this.props.close();
  };

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    };
    this.props.close();
  };

  render() {
    return (
      <div ref={node => this.node = node}>
        <div className='addCard'>
          <h3>Add Card</h3>
          <form className='addForm'>
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
    onAdd: (card) => {
      dispatch(addCard(card));
    }
  };
};

AddCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard);

export default AddCard;