export const ADD_CARD = 'ADD_CARD';

export function addCard(newCard) {
  return {
    type: ADD_CARD,
    payload: newCard
  };
};