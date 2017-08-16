import { ADD_CARD } from './actions';
import { PRIORITY, STATUS } from './constants';

export const addCard = (
  {
    _id = null,
    title = '',
    priority = PRIORITY.LOW,
    status = STATUS.LOW,
    createdBy = '',
    assignedTo = ''
  } = {}
) => {
  if (!_id) return;

  return {
    type: ADD_CARD,
    payload: { _id, title, priority, status, createdBy, assignedTo }
  };
};
