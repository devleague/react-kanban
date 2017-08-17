import React from 'react'

const Card = ({ columnName, title, priority, createdBy, assignedTo, onClick }) => (
  <div onClick={onClick} className={priority}>
    <div className="card_title"><div className="runin">TASK:</div><div className="text">{title}</div></div>
    <div className="card_priority"><div className="runin">PRIORITY:</div><div className="text">{priority}</div></div>
    <div className="created_by"><div className="runin">CREATED BY:</div><div className="text">{createdBy}</div></div>
    <div className="assigned_to"><div className="runin">ASSIGNED TO:</div><div className="text">{assignedTo}</div></div>
  </div>
)

export default Card