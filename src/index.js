import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import './index.css';
import cards from "./reducers";
import App from './containers/App/App.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(cards);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
