import React from 'react';

const Done = (props) => {
  return props.items.filter(card => card.status === "Done").map(card =>
    <div key={card.id} className="Done">
      <div className="title">{card.title}</div>
      <div className="priority">Priority: {card.priority}</div>
      <div className="assignedBy">Assigned By: {card.createdBy}</div>
      <div className="assignedTo">Assigned To: {card.assignedTo}</div>
      <div className="crud">
        <div className="delete">Delete</div>
        <div className="edit">Edit</div>
      </div>
      <div className="leftArrow" onClick={() => props.toLeft(card)}>&#8249;</div>
    </div>
  )
}

export default Done;