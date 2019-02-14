import React from 'react';
import './Card.scss'

const Card = (props) => {
  const { title, body, priority_id, created_by, assigned_to } = props;

  return (
    <div className="card" data-priority={priority_id}>
      <div>{title}</div>
      <div>{assigned_to}</div>
    </div>
  );
};

export default Card;