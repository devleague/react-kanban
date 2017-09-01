export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD"

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    card
  }
}

export const deleteCard = (cardTitle) => {
  return {
    type: DELETE_CARD,
    cardTitle
  }
}
