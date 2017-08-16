import React from 'react'
import SetCards from './QueueCards'
// import DoneCards from './DoneCards'

const App = () => (
  <div className="kanban_board">
    <div className="queue_container">
      <div className="queue_header">Queue</div>
      <div className="queue_column">
        <SetCards columnName={"in-queue"}/>
      </div>
    </div>
    <div className="inProgress_container">
      <div className="inProgress_header">In Progress</div>
      <div className="inProgress_column">
          <SetCards columnName={"in-progress"}/>
      </div>
    </div>
    <div className="done_container">
      <div className="done_header">Done</div>
      <div className="inProgress_column">
        <SetCards columnName={"done"}/>
      </div>
    </div>
  </div>
)

export default App