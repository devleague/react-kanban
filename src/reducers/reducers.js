import { ADD_ITEM, GET_ALL_ITEMS } from '../actions/actions.js'


const ItemReducer = ( state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
    
      return [...action.items]
    case GET_ALL_ITEMS: 
      return [...action.items]
    default:
      return state
  }
}

export default ItemReducer