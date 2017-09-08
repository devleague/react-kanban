import React, { Component } from 'react';

class EditableField extends Component {
  constructor(props) {
    super(props);

    const { name, isNewCard, value } = this.props;

    this.state = {
      name: name,
      isEditing: isNewCard,
      value: value
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.showEditField = this.showEditField.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  handleFieldChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  showEditField() {
    this.setState({
      isEditing: true
    });
  }

  updateField(e) {
    //if keydown was enter
    if (e.keyCode === 13) {
      e.target.blur();
    } else return;

    const { name, value } = this.state;
    this.props.updateField(name, value);
    this.setState({ isEditing: false });
  }

  render() {
    const { value, isEditing } = this.state;
    const { label } = this.props;
    return (
      <div>
        {label &&
          <h3>
            {label}
          </h3>}
        {isEditing
          ? <input
              type="text"
              value={value}
              onChange={this.handleFieldChange}
              onKeyDown={this.updateField}
              onBlur={this.updateField}
            />
          : <h3 onDoubleClick={this.showEditField}>
              {value}
            </h3>}
      </div>
    );
  }
}

export default EditableField;
