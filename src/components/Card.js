import React from 'react'
import DeleteCard from '../containers/DeleteCard.js'

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
  </div>
)

export default Card