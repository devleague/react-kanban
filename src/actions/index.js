export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD"
export const MOVE_CARD_LEFT = "MOVE_CARD_LEFT";
export const MOVE_CARD_RIGHT = "MOVE_CARD_RIGHT";
export const LOAD_CARDS = "LOAD_CARDS";

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

export const loadCards = (cards) => {
  return (dispatch) => {
    return getCards()
      .then(( {cards} ) => {
        dispatch({
          type: LOAD_CARDS,
          cards: cards
        })
      })
  }
}

function getCards (){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve ({
        cards: [{
          id: "33243",
          title: "CSS!",
          priority: "High",
          status: "inProgress",
          createdBy: "DevLeague",
          assignedTo: "Jeff"
        }, {
          id: "23432",
          title: "NPM setup!",
          priority: "High",
          status: "done",
          createdBy: "DevLeague",
          assignedTo: "Jeff"
        }, {
          id: "1299",
          title: "Express connect!",
          priority: "High",
          status: "inQueue",
          createdBy: "DevLeague",
          assignedTo: "Jeff"
        }
      ]
      });
    }, 2000)
  })
}
