import * as action from '../actions';

const initialState = {
  'in-queue': [],
  'in-progress': [],
  'done': []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case action.ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
