import { ADD_CARD, MOVE_CARD } from '../actions/actions';
import { STATUS } from '../actions/constants';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    case MOVE_CARD:
      const { _id, targetColumn } = action.payload;
      return state.map(card => {
        if(card._id == _id) {
          card.status = targetColumn;
        }
        return card;
      });
    default:
      return state;
  }
}
