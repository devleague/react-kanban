console.log("Hi");

import React from 'react';
import {render} from 'react-dom';
import KanbanBoard from './components/KanbanBoard';

render(
  <KanbanBoard url="/tasks"/>,
  document.getElementById('app')
);