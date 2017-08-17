import { CHANGE_STATUS, DROPPED, DRAGGED } from './actions';

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
    case DROPPED:
      let droppedId = droppedOn(state, action);
      return droppedId;
    case DRAGGED:
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

function droppedOn(state, action){
  let newState = state;
  return Object.assign({}, state, newState, {droppedId: action.id})
}

function statusChange(state, action){
  let actionid = Number(action.id);

  let newCards = state.cards.map(card => {
      switch(Number(state.droppedId)){
        case 1: //dropped on in-queue column
          if ((card._id === actionid && card.status === "in-progress") || (card._id === actionid && card.status === "done")) {
            card.status = "in-queue";
          }
          break;
        case 2: //dropped on in-progress column
          if ((card._id === actionid && card.status === "in-queue") || (card._id === actionid && card.status === "done")) {
            card.status = "in-progress";
          }
          break;
        case 3: //dropped on done column
          if ((card._id === actionid && card.status === "in-queue") || (card._id === actionid && card.status === "in-progress")) {
            card.status = "done";
          }
          break;
        default:
          return card;
      }
    return card;
  });
  return Object.assign({}, state, { cards : newCards });
}

export default kanbanReducers