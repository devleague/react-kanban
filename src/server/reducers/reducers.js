import { ADD_ITEM, GET_ALL_ITEMS } from '../actions/actions.js'

const reducers = ( state = [], action) => {
  switch (action.type) {
    case GET_ALL_ITEMS: 
      return [...action.items]
    case ADD_ITEM:
      return [...action.items]
    default:
      return state
  }
}

export default reducers