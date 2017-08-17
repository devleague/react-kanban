import { ADD_CARD, EDIT_CARD, DELETE_CARD, MOVE_CARD, TOGGLE_TODO } from './actions';

let id = 0;

const cardReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return addCard(state, action);
    case EDIT_CARD:
      return editCard(state, action);
    case DELETE_CARD:
      return deleteCard(state, action);
    case MOVE_CARD:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
}

function addCard(state, action) {
  id = ++id;
  return [
    ...state,
    {
      id: id,
      title: action.title,
      priority: action.priority,
      status: action.status,
      createdBy: action.createdBy,
      assignedTo: action.assignedTo
    }
  ];
}

function editCard(state, action) {
  id = ++id;

  return [
    ...state,
    {
      id: id,
      title: action.title,
      priority: action.priority,
      status: action.status,
      createdBy: action.createdBy,
      assignedTo: action.assignedTo
    }
  ];
}

function deleteCard(state, action) {
  id = ++id;

  return [
    ...state,
    {
      id: id,
      title: action.title,
      priority: action.priority,
      status: action.status,
      createdBy: action.createdBy,
      assignedTo: action.assignedTo
    }
  ];
}

export default cardReducers