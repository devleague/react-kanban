import React from 'react'
import AddCard from '../AddCard'
import KanbanBoard from '../KanbanBoard'

const App = () => (
  <div>
      <div className="add">
        <AddCard />
      </div>

<div className="kanbanBoard">
        <KanbanBoard />
      </div>

  </div>
)

export default App