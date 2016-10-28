import { List } from 'immutable';
import { ADD_ALL_CARDS } from '../actions/kanbanActions';

const initialState = List();

const kanbanPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_CARDS:
      return List(action.data);

    default:
      return state;
  }
}

export default kanbanPageReducer;