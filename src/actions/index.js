export const ADD_CARD = 'ADD_CARD';
export const SELECT_CARD = 'SELECT_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const STATUS_CARD = 'STATUS_CARD';

export function addCard(newCard) {
  return {
    type: ADD_CARD,
    payload: newCard
  };
};

export function selectCard(cardData) {
  return {
    type: SELECT_CARD,
    payload: cardData
  };
};

export function deleteCard(cardId) {
  return {
    type: DELETE_CARD,
    payload: cardId
  };
};

export function editCard(cardData) {
  return {
    type: EDIT_CARD,
    payload: cardData
  };
};

export function updateStatus(cardData) {
  return {
    type: STATUS_CARD,
    payload: cardData
  };
};