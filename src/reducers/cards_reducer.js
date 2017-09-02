import { ADD_CARD, DELETE_CARD, MOVE_CARD_LEFT, MOVE_CARD_RIGHT, LOAD_CARDS} from "../actions";
const initialState = [];

const cards = (state = initialState, action ) => {
  switch (action.type) {
    case LOAD_CARDS:
    return action.cards;

    case ADD_CARD:
    return [...state, action.card];

    case DELETE_CARD:
    return state.filter((card) => {
        return card.title !== action.cardTitle
      });

    case MOVE_CARD_LEFT:
    let leftArr = [...state];
    leftArr.forEach((card) => {
      if(card.status === "inProgress" && card.title === action.cardTitle){
        card.status = "inQueue"
      } else if (card.status === "done" && card.title === action.cardTitle){
        card.status = "inProgress"
      }
    })
    return leftArr;

    case MOVE_CARD_RIGHT:
    let rightArr = [...state];
    rightArr.forEach((card) => {
      if(card.status === "inQueue" && card.title === action.cardTitle){
        card.status = "inProgress"
      } else if (card.status === "inProgress" && card.title === action.cardTitle){
        card.status = "done"
      }
    })
    return rightArr;

    default:
      return state;
  }
}

export default cards;
