import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = this.props;
  }

  render() {
    const { _id, title, priority, status, createdBy, assignedTo } = this.props;

    return (
      <div className="card" draggable={true}>
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
