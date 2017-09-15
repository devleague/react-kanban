import './App.css';

// React
import React from 'react';
import { render } from 'react-dom';
import App from './App';

// react - redux binding
import { Provider } from 'react-redux';

// our reducer
import kanbanReducers from './reducers';

// create a redux store for our application
import { createStore } from 'redux';
let store = createStore(kanbanReducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)