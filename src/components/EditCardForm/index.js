import React, { Component } from 'react';
import Input from '../Input';
import TextArea from '../TextArea';
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
    const { title, priority, assignedTo, createdBy } = this.state;

    return (
        <form onSubmit={this.handleSubmit}>
            <TextArea
              label="Title"
              value={title}
              name="title"
              onChange={this.handleChange}
            />
            <Input
              label="Priority"
              type="text"
              value={priority}
              name="priority"
              onChange={this.handleChange}
            />
            <Input
              label="Created By"
              type="text"
              value={createdBy}
              name="createdBy"
              onChange={this.handleChange}
            />
            <Input
              label="Assigned To"
              type="text"
              value={assignedTo}
              name="assignedTo"
              onChange={this.handleChange}
            />
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
