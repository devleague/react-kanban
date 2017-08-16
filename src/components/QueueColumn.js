import React from 'react'

const QueueColumn = () => ({ onClick, completed, text }) => (
  <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }} >
    {text}
  </li>
)

export default QueueColumn