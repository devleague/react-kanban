import * as action from './actions';
import { PRIORITY, STATUS } from './constants';

const ADD_CARD = (
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
    type: action.ADD_CARD,
    payload: { _id, title, priority, status, createdBy, assignedTo }
  };
};
