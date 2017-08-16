import { ADD_CARD, MOVE_CARD } from '../actions/actions';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    case MOVE_CARD:
      const { _id, currentColumn, targetColumn } = action;
      let fromColumn = [...state[currentColumn]];
      let toColumn = [...state[targetColumn]];
    // let cardToMove =
    default:
      return state;
  }
}
