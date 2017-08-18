
export const ADD_CARD = 'ADD_CARD'
export const CHANGE_STATUS = 'CHANGE_STATUS'
export const DROPPED = 'DROPPED'
export const DRAGGED = 'DRAGGED'
export const EDIT = 'EDIT'

export function addCard(newCard) {
  return { type: ADD_CARD, newCard: newCard }
}

export function changeStatus(id) {
  return { type: CHANGE_STATUS, id: id }
};

export function recordDroppedId(id) {
  return { type: DROPPED, id: id }
};

export function recordDraggedId(id) {
  return { type: DRAGGED, id: id }
};

export function editCard(id){
  return { type: EDIT, id: id }
}

