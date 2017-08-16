import { CHANGE_STATUS } from './actions';

let id = 0;

const kanbanReducers = (state = [], action) => {
  switch (action.type) {
  //   case ADD_TODO:
  //     return add(state, action);
    case CHANGE_STATUS:
      return state.map(card => {
        if (card.id === action.id) {
          if (card.status = 'in-queue'){
            card.status = 'in-progress';
          } else if (card.status = "in-progress") {
            card.status = 'done';
          }
        }
        return card;
      });
    default:
      return state;
  }
}

// function add(state, action) {
//   // increment id
//   id = ++id;

//   // return state
//   return [
//     // the current state
//     ...state, // [ {}, {}, {} ]
//     // the new todo
//     {
//       id: id,
//       text: action.text,
//       completed: false
//     }
//   ];
// }


export default kanbanReducers