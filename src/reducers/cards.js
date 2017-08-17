import {
  ADD_CARD,
  MOVE_CARD,
  DEL_CARD,
  REQUEST_CARDS,
  RECEIVE_CARDS
} from '../actions/actions';

const initialState = {
  cards: [],
  isFetchingCards: false,
  isAddingCard: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return Object.assign({}, state, {
        cards: [...state.cards, action.payload]
      });
    case MOVE_CARD:
      const { _id, targetColumn } = action.payload;
      return Object.assign({}, state, {
        cards: state.cards.map(card => {
          if (card._id == _id) {
            card.status = targetColumn;
          }
          return card;
        })
      });
    case DEL_CARD:
      const delId = action.payload._id;
      return Object.assign({}, state, {
        cards: state.cards.filter(card => {
          return card._id != delId;
        })
      });
    case REQUEST_CARDS:
      return Object.assign({}, state, { isFetchingCards: true });
    case RECEIVE_CARDS:
      return Object.assign({}, state, {
        isFetchingCards: false,
        cards: [...state.cards, ...action.payload]
      });
    default:
      return state;
  }
}
