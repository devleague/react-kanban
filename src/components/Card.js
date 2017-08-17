import React from 'react'

const Card = ({ title, status, priority, createdBy, assignedTo }) => (

  <div>
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
  </div>
)

export default Card