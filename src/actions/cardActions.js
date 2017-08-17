import { ADD_CARD, MOVE_CARD, DEL_CARD, REQUEST_CARDS, RECEIVE_CARDS } from './actions';
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

export const moveCard = (_id, targetColumn) => {
  return {
    type: MOVE_CARD,
    payload: { _id, targetColumn }
  };
};

export const delCard = _id => {
  return {
    type: DEL_CARD,
    payload: { _id }
  };
};
