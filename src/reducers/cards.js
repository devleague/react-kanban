import {
  ADD_CARD,
  REQ_ADD_CARD,
  MOVE_CARD,
  DEL_CARD,
  EDIT_CARD,
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
        cards: [...state.cards, action.payload],
        isAddingCard: false
      });
    case REQ_ADD_CARD:
      return Object.assign({}, state, { isAddingCard: true });
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
    case EDIT_CARD:
      return Object.assign({}, state, {
        cards: state.cards.map(card => {
          if (card._id == action.payload._id) {
            return Object.assign({}, card, action.payload);
          }
          return card;
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
