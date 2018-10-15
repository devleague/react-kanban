import React from 'react';

const Queue = (props) => {
  return props.items.filter(card => card.status === "In-Queue").map(card =>
    <div key={card.id} className="Queue">
      <div className="title">{card.title}</div>
      <div className="priority">Priority: {card.priority}</div>
      <div className="assignedBy">Assigned By: {card.createdBy}</div>
      <div className="assignedTo">Assigned To: {card.assignedTo}</div>
      <div className="crud">
        <div className="delete">Delete</div>
        <div className="edit">Edit</div>
      </div>
      <div className="rightArrow" onClick={() => props.toRight(card)}>&#8250;</div>
    </div>
  )
}

export default Queue;