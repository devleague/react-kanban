import React from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';
import { render } from 'react-dom';
import './index.css';
import App from './containers/App';

let store = createStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
