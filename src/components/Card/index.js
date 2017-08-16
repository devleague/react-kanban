import React from 'react';
import './Card.css';

const Card = ({ _id, title, priority, status, createdBy, assignedTo }) =>
  {
    return <div className='card'>
    <h3>{title}</h3>
    <h5>Priority: {priority}</h5>
    <h5>Created by: {createdBy}</h5>
    <h5>Assigned to: {assignedTo}</h5>
  </div>;
}

export default Card;
