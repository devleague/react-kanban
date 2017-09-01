import { ADD_CARD } from "../actions";
const initialState = { cards: [] };

const cards = (state = initialState, action ) => {
  switch (action.type) {
    case ADD_CARD:
    break;

    default:
      return state
  }
}

export default cards;
