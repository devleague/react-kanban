import { ADD_CARD, MOVE_CARD } from '../actions/actions';
import { STATUS } from '../actions/constants';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    case MOVE_CARD:
      const { _id, targetColumn } = action.payload;
      const newState = state.slice();

      const indexOfCard = newState.findIndex(card => {
        return card._id == _id;
      });

      newState[indexOfCard].status = targetColumn;
      return newState;
    default:
      return state;
  }
}
