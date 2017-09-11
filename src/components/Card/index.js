import React, { Component } from 'react';
import './Card.css';
import EditCardForm from '../EditCardForm';
import Field from '../Field';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDelCard } from '../../actions/cardActions';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      isDragging: false,
      showDelBtn: false,
      isEditing: false
    };

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onDragStart = this._onDragStart.bind(this);

    this._onDelClick = this._onDelClick.bind(this);

    this._onDrag = this._onDrag.bind(this);
    this._onDragEnd = this._onDragEnd.bind(this);

    this._enableEdit = this._enableEdit.bind(this);
    this._disableEdit = this._disableEdit.bind(this);
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

  _enableEdit() {
    this.setState({
      isEditing: true
    });
  }

  _disableEdit() {
    this.setState({
      isEditing: false
    });
  }

  render() {
    const {
      _id,
      title,
      priority,
      createdBy,
      assignedTo,
      isDragging,
      showDelBtn,
      isEditing
    } = this.state;

    const isNewCard = this.props.newCard || false;
    const className = isDragging ? 'card hidden' : 'card';
    const fieldNames = Object.keys(this.props).filter(field =>
      ['title', 'priority', 'createdBy', 'assignedTo'].includes(field)
    );

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
        {isEditing ? (
          <EditCardForm {...this.props} disableEdit={this._disableEdit} />
        ) : (
          fieldNames.map((field, i) => (
            <Field key={i} label={field} value={this.props[field]} />
          ))
        )}

        <span onClick={() => this.setState({ isEditing: true })}>edit</span>
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
