import { GET_ALL_CARDS, CHANGE_STATUS_LEFT, CHANGE_STATUS_RIGHT, ADD_CARD, EDIT_CARD, DELETE_CARD } from '../actions/actions.js'

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_CARDS:
      return action.payload
    case CHANGE_STATUS_LEFT:
      return action.payload
    case CHANGE_STATUS_RIGHT:
      return action.payload
    case ADD_CARD:
      return action.payload
    case EDIT_CARD:
      return action.payload
    case DELETE_CARD:
      return action.payload
    default:
      return state
  }
}

export default itemReducer;