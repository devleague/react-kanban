import { ADD_CARD, DELETE_CARD } from "../actions";
const initialState = { cards: [] };

const cards = (state = initialState, action ) => {
  switch (action.type) {
    case ADD_CARD:
    return {
      cards: [...state.cards, action.card]
    }

    case DELETE_CARD:
    console.log("ACTION.CARDID", action.cardTitle);
    console.log("STATE CARDS", state.cards);

    let newArr = state.cards.filter((card) => {
      return card.title !== action.cardTitle
    })

    console.log("NEW ARR", newArr)

    return {
      cards: newArr
    }

    default:
      return state
  }
}

export default cards;
