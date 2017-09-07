import './containers/App/App.css';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/App.js';

import { Provider } from 'react-redux';

import cardReducers from './containers/App/reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(
  cardReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
);

render(
  <Provider store={store}>
        <div className ='mainContainer'>
          <App/>
        </div>

  </Provider>,
  document.getElementById('root')
)