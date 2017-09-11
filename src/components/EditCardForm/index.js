import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEditCard } from '../../actions/cardActions';

class EditCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editCard(this.state);
    this.props.disableEdit();
  }

  render() {
    const { title, priority, assignedTo, assignedBy } = this.state;

    return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={title}
              name="title"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              value={priority}
              name="priority"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              value={assignedTo}
              name="assignedTo"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              value={assignedBy}
              name="assignedBy"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">save</button>
        </form>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    editCard: bindActionCreators(fetchEditCard, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(EditCardForm);
