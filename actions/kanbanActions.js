export const ADD_ALL_CARDS = 'ADD_ALL_CARDS';

export const addAllCards = (data) => {
  return {
    type: ADD_ALL_CARDS,
    data,
  }
}