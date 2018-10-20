import { GET_ALL_CARDS, CHANGE_STATUS_LEFT, CHANGE_STATUS_RIGHT, GET_FORM_DATA, ADD_CARD } from '../actions/actions.js'

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_CARDS:
      return action.payload
    case CHANGE_STATUS_LEFT:
      return action.payload
    case CHANGE_STATUS_RIGHT:
      return action.payload
    case GET_FORM_DATA:
      return action.payload
    case ADD_CARD:
      return action.payload
    default:
      return state
  }
}

export default itemReducer;