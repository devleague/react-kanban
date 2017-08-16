import './containers/App/App.css';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/App.js';

import { Provider } from 'react-redux';

import cardReducers from './containers/App/reducers';

import { createStore } from 'redux';
let store = createStore(cardReducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)