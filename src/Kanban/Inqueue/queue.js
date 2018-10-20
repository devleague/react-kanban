import React from 'react';
import Edit from '../Modals/Edit/Edit.js'
import Delete from '../Modals/Delete/Delete.js'
import Body from '../Modals/Body/Body.js'

const Queue = (props) => {
  return props.items.filter(card => card.is_deleted !== true).filter(card => card.status_id.name === "In-Queue").map(card =>
    <div key={card.id} className="Queue">
      <Body info={card} className="title" />
      <div className="priority">Priority: {card.priority_id.name}</div>
      <div className="assignedBy">Assigned By: {`${card.created_by.first_name} ${card.created_by.last_name}`}</div>
      <div className="assignedTo">Assigned To: {`${card.assigned_to.first_name} ${card.assigned_to.last_name}`}</div>
      <div className="crud">
        <div className="delete"><Delete info={card} /></div>
        <div className="edit"><Edit info={card} /></div>
      </div>
      <div className="rightArrow" onClick={() => props.toRight(card)}>&#8250;</div>
    </div>
  )
}

export default Queue;