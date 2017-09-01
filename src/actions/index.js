export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD"
export const MOVE_CARD_LEFT = "MOVE_CARD_LEFT";
export const MOVE_CARD_RIGHT = "MOVE_CARD_RIGHT";

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

export const moveCardLeft = (cardTitle) => {
  return {
    type: MOVE_CARD_LEFT,
    cardTitle
  }
}

export const moveCardRight = (cardTitle) => {
  return {
    type: MOVE_CARD_RIGHT,
    cardTitle
  }
}
