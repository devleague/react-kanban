export const ADD_ALL_CARDS = 'ADD_ALL_CARDS';
export const MOVE_CARDS = 'MOVE_CARDS';

export const addAllCards = (data) => {
  return {
    type: ADD_ALL_CARDS,
    data,
  }
}

export const moveCards = (data) => {
  return {
    type: MOVE_CARDS,
    data: data
  }
}
