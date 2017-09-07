import React from 'react'
import DeleteCard from '../containers/DeleteCard.js'
import EditCard from '../containers/EditCard.js'

const Card = ({ title, status, priority, createdBy, assignedTo, id, updateCard }) => (

  <div className = {priority}>

  <DeleteCard className="deleteCard" id={id}/>
  <div className="cardElements">
  <li className ="cardInputs">
    Task: {title}
  </li>
  <li className='cardStatus'>
    {status}
  </li>
  <li className ="cardInputs">
    priority: {priority}
  </li>
  <li className ="cardInputs">
    Created By: {createdBy}
  </li>
  <li className ="cardInputs">
    Assigned To: {assignedTo}
  </li>
  </div>
  <EditCard className="editCard" id ={id} title={title} status={status}priority={priority} createdBy={createdBy} assignedTo={assignedTo} updateCard={updateCard}/>
  </div>
)

export default Card