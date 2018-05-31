import { combineReducers } from 'redux';
import cards from './cards_reducer.js';
import users from './users_reducer.js';
import auth from './auth_reducer.js';

const reducers = combineReducers({
  cards,
  users,
  auth
});

export default reducers;
