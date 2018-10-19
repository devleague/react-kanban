import React from 'react';

const Progress = (props) => {
  return props.items.filter(card => card.status_id.name === "In-Progress").map(card =>
    <div key={card.id} className="Progress">
      <div className="title">{card.title}</div>
      <div className="priority">Priority: {card.priority_id.name}</div>
      <div className="assignedBy">Assigned By: {`${card.created_by.first_name} ${card.created_by.last_name}`}</div>
      <div className="assignedTo">Assigned To: {`${card.assigned_to.first_name} ${card.assigned_to.last_name}`}</div>
      <div className="crud">
        <div className="delete">Delete</div>
        <div className="edit">Edit</div>
      </div>
      <div className="arrows">
        <div className="leftArrow" onClick={() => props.toLeft(card)}>&#8249;</div>
        <div className="rightArrow" onClick={() => props.toRight(card)}>&#8250;</div>
      </div>
    </div>
  )
}

export default Progress;