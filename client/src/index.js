import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/app';
import './index.css';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import cards from './reducers';

let store = createStore(cards);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);
