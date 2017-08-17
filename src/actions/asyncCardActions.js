//replace with isomorphic fetch later
import { getFakeDbReq, addToFakeDb } from '../fakeDb/data.js';
import { REQUEST_CARDS , RECEIVE_CARDS } from './actions';

export const requestCards = () => {
  return {
    type: REQUEST_CARDS
  }
}

export const receiveCards = (cards) => {
  return {
    type: RECEIVE_CARDS,
    payload: cards
  }
}

export const fetchCards = () => {
  return function(dispatch) {

    dispatch(requestCards);

    return getFakeDbReq()
    .then(cards => {
      dispatch(receiveCards(cards))
    },
    error => console.log('An error occured.', error))
  }
}