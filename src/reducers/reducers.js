import { GET_ALL_TASKS, ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/actions.js';

const itemReducer = (state = [], action) => {

  switch (action.type) {
    case GET_ALL_TASKS:

      return action.payload;

    case ADD_TASK:
      return [...state, action.payload];

    case EDIT_TASK:
      return action.payload;

    case DELETE_TASK:
      return [...state], action.payload;

    default:
    
      return state;
  }
}

export default itemReducer;