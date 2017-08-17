
export const ADD_CARD = 'ADD_CARD'
export const CHANGE_STATUS = 'CHANGE_STATUS'
export const DROPPED = 'DROPPED'
export const DRAGGED = 'DRAGGED'

export function addCard(newCard) {
  return { type: ADD_CARD, newCard: newCard }
}

// export function changeStatusLeft(id) {
//   return { type: CHANGE_STATUS_LEFT, id: id }
// };

// export function changeStatusRight(id) {
//   return { type: CHANGE_STATUS_RIGHT, id: id }
// };

export function changeStatus(id) {
  return { type: CHANGE_STATUS, id: id }
};

export function recordDroppedId(id) {
  return { type: DROPPED, id: id }
};

export function recordDraggedId(id) {
  return { type: DRAGGED, id: id }
};