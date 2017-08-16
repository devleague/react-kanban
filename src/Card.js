import React from 'react'

const Card = ({ title, priority, createdBy, assignedTo }) => (
  <div className="card">
    <div className="card_title">TASK: {title}</div>
    <div className="card_priority">PRIORITY: {priority}</div>
    <div className="created_by">CREATED BY: {createdBy}</div>
    <div className="assigned_to">ASSIGNED TO: {assignedTo}</div>
  </div>
)

export default Card