import React from 'react';

const Done = (props) => {
  return props.items.filter(card => card.status_id.name === "Done").map(card =>
    <div key={card.id} className="Done">
      <div className="title">{card.title}</div>
      <div className="priority">Priority: {card.priority_id.name}</div>
      <div className="assignedBy">Assigned By: {`${card.created_by.first_name} ${card.created_by.last_name}`}</div>
      <div className="assignedTo">Assigned To: {`${card.assigned_to.first_name} ${card.assigned_to.last_name}`}</div>
      <div className="crud">
        <div className="delete">Delete</div>
        <div className="edit">Edit</div>
      </div>
      <div className="leftArrow" onClick={() => props.toLeft(card)}>&#8249;</div>
    </div>
  )
}

export default Done;