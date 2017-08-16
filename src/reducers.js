// import { ADD_TODO, TOGGLE_TODO } from './actions';

let id = 0;

const kanbanReducers = (state = [], action) => {
  // switch (action.type) {
  //   case ADD_TODO:
  //     return add(state, action);
  //   case TOGGLE_TODO:
  //     return state.map(todo => {
  //       if (todo.id === action.id) {
  //         todo.completed = !todo.completed;
  //       }
  //       return todo;
  //     });
  //   default:
  //     return state;
  // }
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