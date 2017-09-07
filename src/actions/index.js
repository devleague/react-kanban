import querystring from "querystring";
import axios from "axios";
export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD"
export const MOVE_CARD_LEFT = "MOVE_CARD_LEFT";
export const MOVE_CARD_RIGHT = "MOVE_CARD_RIGHT";
export const LOAD_CARDS = "LOAD_CARDS";

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

export const deleteCard = (cardId) => {
  return (dispatch) => {
    axios.delete(`/delete/${cardId}`)
    .then((cards) => {
      dispatch({
        type: LOAD_CARDS,
        cards: cards.data
      })
    })
  }
}

export const moveCardRight = (cardId) => {
  let moveId = parseInt(cardId);
  return (dispatch) => {
    axios.put(`/move/right/${moveId}`)
    .then((cards) => {
      dispatch({
        type: LOAD_CARDS,
        cards: cards.data
      })
    })
  }
}

export const moveCardLeft = (cardId) => {
  let moveId = parseInt(cardId);
  return (dispatch) => {
    axios.put(`/move/left/${moveId}`)
    .then((cards) => {
      dispatch({
        type: LOAD_CARDS,
        cards: cards.data
      })
    })
  }
}

export const editCard = (cardId, edited) => {
  let editId = parseInt(cardId);
    return (dispatch) => {
      axios.put(`/edit/${editId}`, querystring.stringify(edited))
      .then((cards) => {
        dispatch({
          type: LOAD_CARDS,
          cards: cards.data
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
