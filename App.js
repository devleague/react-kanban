import React from 'react';
import KanbanPage from './components/KanbanPage';

class App extends React.Component {
  render () {
    return (
      <div>
        <RedditPage
        KanbanUrl='https://www.reddit.com/r/showerthoughts.json'
        />
      </div>
    )
  }
}

export default App;
