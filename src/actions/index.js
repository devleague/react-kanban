import querystring from "querystring";
import axios from "axios";
export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD"
export const MOVE_CARD_LEFT = "MOVE_CARD_LEFT";
export const MOVE_CARD_RIGHT = "MOVE_CARD_RIGHT";
export const LOAD_CARDS = "LOAD_CARDS";

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

export const loadCards = (cards) => {
  return (dispatch) => {
    return fetch("/cards")
      .then((res) => res.json())
      .then((cards) => {
        dispatch({
          type: LOAD_CARDS,
          cards: cards
        })
      })
  }
}

export const addCard = (card) => {
  return (dispatch) => {
    axios.post("/post", querystring.stringify(card))
    .then((cards) => {
      dispatch({
        type: LOAD_CARDS,
        cards: cards.data
      })
    })
  }
}
