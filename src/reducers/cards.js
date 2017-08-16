import { ADD_CARD } from '../actions/actions';

const initialState = {
  in_queue: [],
  in_progress: [],
  done: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return Object.assign({}, state, {
        in_queue: [...state.in_queue, action.payload]
      });
    default:
      return state;
  }
}
