import querystring from "querystring";
import axios from "axios";
export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD"
export const MOVE_CARD_LEFT = "MOVE_CARD_LEFT";
export const MOVE_CARD_RIGHT = "MOVE_CARD_RIGHT";
export const LOAD_CARDS = "LOAD_CARDS";
export const LOAD_USERS = "LOAD_USERS";
export const LOAD_AUTH = "LOAD_AUTH";
export const CHECK_AUTH = "CHECK_AUTH"

export const deleteCard = (cardId) => {
  return (dispatch) => {
    axios
      .delete(`/delete/${cardId}`)
      .then((cards) => {
        dispatch({type: LOAD_CARDS, cards: cards.data})
      })
  }
}

export const moveCardRight = (cardId) => {
  let moveId = parseInt(cardId, 10);
  return (dispatch) => {
    axios
      .put(`/move/right/${moveId}`)
      .then((cards) => {
        dispatch({type: LOAD_CARDS, cards: cards.data})
      })
  }
}

export const moveCardLeft = (cardId) => {
  let moveId = parseInt(cardId, 10);
  return (dispatch) => {
    axios
      .put(`/move/left/${moveId}`)
      .then((cards) => {
        dispatch({type: LOAD_CARDS, cards: cards.data})
      })
  }
}

export const editCard = (cardId, edited) => {
  let editId = parseInt(cardId, 10);
  return (dispatch) => {
    axios
      .put(`/edit/${editId}`, querystring.stringify(edited))
      .then((cards) => {
        dispatch({type: LOAD_CARDS, cards: cards.data})
      })
  }
}

export const addCard = (card) => {
  return (dispatch) => {
    axios
      .post("/post", querystring.stringify(card))
      .then((cards) => {
        dispatch({type: LOAD_CARDS, cards: cards.data})
      })
  }
}

export const checkUser = () => {
  return (dispatch) => {
    axios.get("/auth")
      .then((res) => {
        dispatch({
          type: LOAD_AUTH, 
          auth: res.data
        })
      })
  }
}

export const addUser = (user) => {
  return (dispatch) => {
    axios
      .post("/login/new", querystring.stringify(user))
      .then((users) => {
        dispatch({type: LOAD_USERS, users: users.data})
      })
  }
}

export const loadCards = (cards) => {
  return (dispatch) => {
    axios
      .get("/cards")
      .then((cards) => {
        dispatch({type: LOAD_CARDS, cards: cards.data})
      })
  }
}

export const loadUsers = (users) => {
  return (dispatch) => {
    axios
      .get("/users")
      .then((users) => {
        dispatch({type: LOAD_USERS, users: users.data})
      })
  }
}

export const logUserOut = () => {
  return (dispatch) => {
    axios.get("/logout")
    .then(() => {
      dispatch({
        type: LOAD_AUTH,
        auth: null
      })
    })
  }
}

export const authUser = (user) => {
  return (dispatch) => {
    axios
      .post("/login", querystring.stringify(user))
      .then((res) => {
        dispatch({type: LOAD_AUTH, auth: res.data})
      })
  }
}

