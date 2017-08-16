import { ADD_CARD, MOVE_CARD, DEL_CARD } from '../actions/actions';

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
    case DEL_CARD:
      const delId = action.payload._id;
      return state.filter(card => {
        return card._id != delId
      });
    default:
      return state;
  }
}
