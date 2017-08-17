import React from 'react'
import DeleteCard from '../containers/DeleteCard.js'
import EditCard from '../containers/EditCard.js'

const Card = ({ title, status, priority, createdBy, assignedTo, id }) => (

  <div className = {priority}>

  <li >
    {title}
  </li>
  <li >
    {status}
  </li>
  <li >
    {priority}
  </li>
  <li >
    {createdBy}
  </li>
  <li >
    {assignedTo}
  </li>
  <DeleteCard id={id}/>
  <EditCard id ={id} title={title} status={status}priority={priority} createdBy={createdBy} assignedTo={assignedTo}/>
  </div>
)

export default Card