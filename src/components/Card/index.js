import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
      isDragging: false
    };

    this._onDragStart = this._onDragStart.bind(this);
    this._onDrag = this._onDrag.bind(this);
    this._onDragEnd = this._onDragEnd.bind(this);
  }

  _onDragStart(e) {
    console.log(this.state._id)
    e.dataTransfer.setData('text', this.state._id);
  }

  _onDrag(e) {
    this.setState({ isDragging: true });
  }

  _onDragEnd(e) {
    this.setState({ isDragging: false});
  }

  render() {
    const {
      _id,
      title,
      priority,
      status,
      createdBy,
      assignedTo,
      isDragging
    } = this.state;

    const className = isDragging ? 'card hidden' : 'card';

    return (
      <div
        className={className}
        ref={node => this.cardNode = node}
        draggable={true}
        onDragStart={this._onDragStart}
        onDrag={this._onDrag}
        onDragEnd={this._onDragEnd}
      >
        <h3>
          {title}
        </h3>
        <h5>
          Priority: {priority}
        </h5>
        <h5>
          Created by: {createdBy}
        </h5>
        <h5>
          Assigned to: {assignedTo}
        </h5>
      </div>
    );
  }
}

export default Card;
