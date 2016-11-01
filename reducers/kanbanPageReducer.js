import { List } from 'immutable';
import { ADD_ALL_CARDS, MOVE_CARDS } from '../actions/kanbanActions';

const initialState = List();

const kanbanPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_CARDS:
      return List(action.data);
    case MOVE_CARDS:
      //console.log("hi")
      let indexToUpdate = state.findIndex(card => {
            return card.id === action.data.id;
      });
      //console.log("index to update", indexToUpdate)
      return state.update( indexToUpdate, (card) =>{
      //console.log("card354",card)
      let cardCopy = JSON.parse(JSON.stringify(card));
      cardCopy.Status = action.data.status;
      return cardCopy;
      })

    default:
      return state;
  }
}

export default kanbanPageReducer;