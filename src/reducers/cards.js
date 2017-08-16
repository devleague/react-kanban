import { ADD_CARD } from '../actions/actions'

const initialState = {
  'in-queue': [],
  'in-progress': [],
  'done': []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
