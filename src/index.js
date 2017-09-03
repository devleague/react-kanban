import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import './index.css';
import reducers from "./reducers";
import App from './containers/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk)
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
