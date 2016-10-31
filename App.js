import React from 'react';
import KanbanPage from './components/KanbanPage';
import KanbanNew from './components/KanbanPage';


class App extends React.Component {
  render () {
    return (
      <div>
        <KanbanPage
        kanbanUrl='http://localhost:3000/api'
        />
      </div>
    )
  }
}

export default App;
