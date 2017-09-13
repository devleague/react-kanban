import {
  ADD_CARD,
  REQ_ADD_CARD,
  MOVE_CARD,
  DEL_CARD,
  EDIT_CARD,
  REQUEST_CARDS,
  RECEIVE_CARDS
} from './actions';
import { PRIORITY, STATUS } from './constants';
//replace with isomorphic fetch later
import fetch from 'isomorphic-fetch';

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

  return fetch('/api/cards', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ card: newCard })
  })
    .then(res => res.json())
    .then(
      newCard => {
        if (newCard.status === 'success') {
          dispatch(addCard(newCard.data));
          return Promise.resolve();
        }
      },
      err => console.log(err)
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
  return fetch(`/api/cards/${_id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: targetColumn })
  })
    .then(res => res.json())
    .then(
      card => {
        if (card.status === 'success') {
          return Promise.resolve(card.data);
        } else {
          console.log(card.message);
        }
      },
      error => console.log(error)
    );
};

export const delCard = _id => {
  return {
    type: DEL_CARD,
    payload: { _id }
  };
};

export const fetchDelCard = _id => dispatch => {
  dispatch(delCard(_id));

  return fetch(`/api/cards/${_id}`, { method: 'DELETE', body: _id })
    .then(res => res.json())
    .then(
      card => {
        console.log(card);
        if (card.status === 'success') {
          return Promise.resolve(card);
        } else {
          console.log(card.message);
        }
      },
      error => console.log(error)
    );
};

export const editCard = card => {
  return {
    type: EDIT_CARD,
    payload: card
  };
};

export const fetchEditCard = card => dispatch => {
  dispatch(editCard(card));
  const { _id } = card;
  return fetch(`/api/cards/${_id}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PATCH',
    body: JSON.stringify(card)
  })
    .then(res => res.json())
    .then(
      card => {
        if (card.status === 'success') {
          return Promise.resolve(card);
        } else {
          console.log(card.message);
        }
      },
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

  return fetch('/api/cards/')
    .then(res => res.json())
    .then(
      cards => {
        if (cards.status === 'success') {
          return dispatch(receiveCards(cards.data));
        } else {
          console.log(cards.message);
        }
      },
      error => console.log('An error occured.', error)
    );
};
