import { ADD_CARD, MOVE_CARD } from './actions';
import { PRIORITY, STATUS } from './constants';

let nextId = 0;

export const addCard = (
  {
    title = '',
    priority = PRIORITY.LOW,
    status = STATUS.LOW,
    createdBy = '',
    assignedTo = ''
  } = {}
) => {

  let _id = ++nextId;

  return {
    type: ADD_CARD,
    payload: { _id, title, priority, status, createdBy, assignedTo }
  };
};

export const moveCard = (_id, currentColumn, targetColumn) => {
  return {
    type: MOVE_CARD,
    payload: { _id, currentColumn, targetColumn }
  }
}
