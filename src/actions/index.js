export const ADD_CARD = "ADD_CARD";

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    card
  }
}
