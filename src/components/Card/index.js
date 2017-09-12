import React, { PureComponent } from 'react';
import './Card.css';
import EditCardForm from '../EditCardForm';
import Field from '../Field';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDelCard } from '../../actions/cardActions';

class Card extends PureComponent {
  constructor() {
    super();
    this.state = {
      isDragging: false,
      isEditing: false
    };

    this._onDelClick = this._onDelClick.bind(this);

    this._onDragStart = this._onDragStart.bind(this);
    this._onDrag = this._onDrag.bind(this);
    this._onDragEnd = this._onDragEnd.bind(this);

    this._enableEdit = this._enableEdit.bind(this);
    this._disableEdit = this._disableEdit.bind(this);
  }

  _onDelClick() {
    this.props.delCard(this.props._id);
  }

  _onDragStart(e) {
    e.dataTransfer.setData('text', this.props._id);
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
    const { _id, title, priority, createdBy, assignedTo } = this.props;

    const { isDragging, isEditing } = this.state;

    const className = isDragging ? 'card card__hidden' : 'card';

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
          <div>
            <Field value={title} />
            <Field label="Priority" value={priority} />
            <Field label="Created by" value={createdBy} />

            <span onClick={this._enableEdit}>edit</span>
            <span onClick={this._onDelClick}>delete</span>
          </div>
        )}
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
