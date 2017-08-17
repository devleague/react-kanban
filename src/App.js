import React from 'react'
import AddCard from './AddCard'
import MakeColumn from './MakeColumn'
// import DoneCards from './DoneCards'

const App = () => (
<div className="kanban_board">
  <div className="banner">
    <h1>John-Ban</h1>
    <div className="add_card_outer">
      <AddCard />
    </div>
  </div>
  <MakeColumn classList={
                            {
                              id: 1,
                              level1: "queue_container",
                              level2: "queue_header",
                              level3: "queue_column",
                              columnName: "in-queue"
                            }
                          }/>
  <MakeColumn classList={
                            {
                              id: 2,
                              level1: "inProgress_container",
                              level2: "inProgress_header",
                              level3: "inProgress_column",
                              columnName: "in-progress"
                            }
                          }/>
  <MakeColumn classList={
                            {
                              id: 3,
                              level1: "done_container",
                              level2: "done_header",
                              level3: "done_column",
                              columnName: "done"
                            }
                          }/>

</div>
)

export default App