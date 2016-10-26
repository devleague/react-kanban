import React from 'react';
import ReactDOM from 'react-dom';
import KanbanPage from './components/KanbanPage';

ReactDOM.render(
  <KanbanPage url='http://localhost:3000' />,
  document.getElementById('root')
);