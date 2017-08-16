import './index.css';

import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/App.js';

/*import { Provider } from 'react-redux';

import todoReducers from './reducers';

import { createStore } from 'redux';
let store = createStore(todoReducers);*/

render(
  /*<Provider store={store}>*/
    <App />,
  /*</Provider>,*/
  document.getElementById('root')
)