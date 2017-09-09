import { combineReducers } from "redux";
import cards from "./cards_reducer.js";
import users from "./users_reducer.js";

const reducers = combineReducers({
  cards,
  users
})

export default reducers;
