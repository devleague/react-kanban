import { List } from 'immutable';
import { KANBAN_CARDS } from '../actions/kanbanActions';

const initialState = List();

const kanbanPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case KANBAN_CARDS:
      return List(action.data);

    default:
      return state;
  }
}

export default kanbanPageReducer;