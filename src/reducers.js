import { CHANGE_STATUS } from './actions';

let id = 6;

const kanbanReducers = (state = { cards: [
      {
        "_id": 1,
        "title": "Fix CSS",
        "priority": "medium",
        "status": "in-queue",
        "createdBy": "John",
        "assignedTo": "Dorie"
      },
      {
        "_id": 2,
        "title": "Improve UI",
        "priority": "low",
        "status": "in-queue",
        "createdBy": "Dorie",
        "assignedTo": "Emilie"
      },
      {
        "_id": 4,
        "title": "Delete console logs",
        "priority": "high",
        "status": "in-progress",
        "createdBy": "Emilie",
        "assignedTo": "Frank"
      },
      {
        "_id": 5,
        "title": "Eat Do-nuts",
        "priority": "blocker",
        "status": "done",
        "createdBy": "Frank",
        "assignedTo": "John"
      }
  ]}, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return add(state, action);
    case CHANGE_STATUS:
      return statusChange(state, action);

    default:
      return state;
  }
}

function add(state, action) {
  id = ++id;
  return { cards : [
    ...state.cards,
    {
      _id: id,
      title: action.newCard.title,
      priority: action.newCard.priority,
      createdBy: action.newCard.createdBy,
      assignedTo: action.newCard.assignedTo,
      status: 'in-queue'
    }
  ]}
}

function statusChange(state, action){
    let newCards = state.cards.map(card => {
    if (card._id === action.id) {
      if (card.status === 'in-queue'){
        card.status = 'in-progress';
      } else if (card.status === "in-progress") {
        card.status = 'done';
      }
    }
    return card;
  });
  return Object.assign({}, state, { cards : newCards })
}

export default kanbanReducers