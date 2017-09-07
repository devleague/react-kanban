import React from 'react'
import AddCard from '../AddCard'
import KanbanBoard from '../KanbanBoard'

const App = () => (
  <div className="fullscreen">
      <div className="header">
        <AddCard />
      </div>

        <KanbanBoard />
  </div>
)

export default App