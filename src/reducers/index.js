import { ADD_CARD, DELETE_CARD, MOVE_CARD_LEFT, MOVE_CARD_RIGHT} from "../actions";
const initialState = { cards: [] };

const cards = (state = initialState, action ) => {
  switch (action.type) {
    case ADD_CARD:
    return {
      cards: [...state.cards, action.card]
    }

    case DELETE_CARD:
    return {
      cards: state.cards.filter((card) => {
        return card.title !== action.cardTitle
      })
    }

    case MOVE_CARD_LEFT:
    let leftArr = [...state.cards];
    leftArr.forEach((card) => {
      if(card.status === "inProgress" && card.title === action.cardTitle){
        card.status = "inQueue"
      } else if (card.status === "done" && card.title === action.cardTitle){
        card.status = "inProgress"
      }
    })
    return{
      cards: leftArr
    }

    case MOVE_CARD_RIGHT:
    let rightArr = [...state.cards];
    rightArr.forEach((card) => {
      if(card.status === "inQueue" && card.title === action.cardTitle){
        card.status = "inProgress"
      } else if (card.status === "inProgress" && card.title === action.cardTitle){
        card.status = "done"
      }
    })
    return{
      cards: rightArr
    }

    default:
      return state
  }
}

export default cards;
