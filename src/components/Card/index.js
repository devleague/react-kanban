import React, { Component } from 'react';
import './Card.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDelCard } from '../../actions/cardActions';
import EditableField from '../EditableField';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
      isDragging: false,
      showDelBtn: false
    };

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onDragStart = this._onDragStart.bind(this);

    this._onDelClick = this._onDelClick.bind(this);

    this._onDrag = this._onDrag.bind(this);
    this._onDragEnd = this._onDragEnd.bind(this);

    this._handleUpdateField = this._handleUpdateField.bind(this);
  }

  _onMouseEnter() {
    this.setState({ showDelBtn: true });
  }

  _onMouseLeave() {
    this.setState({ showDelBtn: false });
  }

  _onDelClick() {
    this.props.delCard(this.state._id);
  }

  _onDragStart(e) {
    e.dataTransfer.setData('text', this.state._id);
  }

  _onDrag() {
    this.setState({ isDragging: true });
  }

  _onDragEnd() {
    this.setState({ isDragging: false });
  }

  _handleUpdateField(fieldName, value) {
    let updatedField = {};
    updatedField[fieldName] = value;

    this.setState(updatedField);
  }

  render() {
    const {
      title,
      priority,
      createdBy,
      assignedTo,
      isDragging,
      showDelBtn
    } = this.state;

    const isNewCard = this.props.newCard || false;
    const className = isDragging ? 'card hidden' : 'card';

    return (
      <div
        className={className}
        draggable={true}
        onDragStart={this._onDragStart}
        onDrag={this._onDrag}
        onDragEnd={this._onDragEnd}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {showDelBtn
          ? <button className="delBtn" onClick={this._onDelClick}>
              DEL
            </button>
          : null}
        <EditableField
          name="title"
          value={title}
          isNewCard={isNewCard}
          updateField={this._handleUpdateField}
        />
        <EditableField
          name="priority"
          value={priority}
          label="Priority"
          isNewCard={isNewCard}
          updateField={this._handleUpdateField}
        />
        <EditableField
          name="createdBy"
          value={createdBy}
          label="Created by"
          isNewCard={isNewCard}
          updateField={this._handleUpdateField}
        />
        <EditableField
          name="assignedTo"
          value={assignedTo}
          label="Assigned to"
          isNewCard={isNewCard}
          updateField={this._handleUpdateField}
        />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    delCard: bindActionCreators(fetchDelCard, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Card);
