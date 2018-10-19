import { ADD_ITEM, GET_ALL_ITEMS, EDIT_ITEM } from '../actions/actions.js'

const reducers = ( state = [], action) => {
  console.log('help', action);
  switch (action.type) {
    case GET_ALL_ITEMS:
    console.log("BYEBYE"); 
      return action.task
    case ADD_ITEM:
      return [...state, action.task]
    case EDIT_ITEM:
      const select = state.filter(x => x !== action.task.id);
      return [...select, action.task]
    default:
      return state
  }
}

export default reducers