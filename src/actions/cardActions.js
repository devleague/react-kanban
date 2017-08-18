import {
  ADD_CARD,
  REQ_ADD_CARD,
  MOVE_CARD,
  DEL_CARD,
  REQUEST_CARDS,
  RECEIVE_CARDS
} from './actions';
import { PRIORITY, STATUS } from './constants';
//replace with isomorphic fetch later
import { getFakeDbReq, addToFakeDb, delFromFakeDb, moveFromFakeDb } from '../fakeDb/data.js';

export const addCard = newCard => {
  return {
    type: ADD_CARD,
    payload: newCard
  };
};

const cardDefaults = {
  title: '',
  priority: PRIORITY.LOW,
  status: STATUS.QUEUE,
  createdBy: '',
  assignedTo: '',
  newCard: true
};

export const fetchAddCard = card => dispatch => {
  const newCard = Object.assign({}, cardDefaults, card);
  console.log(card)
console.log(newCard)
  dispatch(addCard(newCard));

  addToFakeDb(newCard).then(
    addedCard => {
      if (addedCard) {
        console.log('added')
        return Promise.resolve();
      }
    },
    //TODO: flash msg to user
    error => console.log('An error occured.', error)
  );
};

export const moveCard = (_id, targetColumn) => {
  return {
    type: MOVE_CARD,
    payload: { _id, targetColumn }
  };
};

export const fetchMoveCard = (_id, targetColumn) => dispatch => {
  dispatch(moveCard(_id, targetColumn));

  moveFromFakeDb(_id, targetColumn)
  .then(card => {
    if(card) {
      console.log(card);
      return Promise.resolve(card);
    }
  },
  error => console.log(error)
  );
}

export const delCard = _id => {
  return {
    type: DEL_CARD,
    payload: { _id }
  };
};

export const fetchDelCard = _id => dispatch => {
  dispatch(delCard(_id))

  delFromFakeDb(_id).then(
    id => {
      console.log(id)
      if(id) {
        console.log('card deleted')
        return Promise.resolve();
      }
    },
    //TODO: flash msg to user
    error => console.log(error)
  );
};

//get all cards
export const requestCards = () => {
  return {
    type: REQUEST_CARDS
  };
};

export const receiveCards = cards => {
  return {
    type: RECEIVE_CARDS,
    payload: cards
  };
};

export const fetchCards = () => dispatch => {
  dispatch(requestCards());

  return getFakeDbReq().then(
    cards => {
      dispatch(receiveCards(cards));
    },
    error => console.log('An error occured.', error)
  );
};
