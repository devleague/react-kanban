import React from 'react'
import Card from './Card'

const DoneColumn = () => ({ onClick, completed, text }) => (
  <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }} >
    {text}
  </li>
)

export default DoneColumn