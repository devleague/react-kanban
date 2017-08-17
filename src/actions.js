
export const ADD_CARD = 'ADD_CARD'
export const CHANGE_STATUS = 'CHANGE_STATUS'

export function addCard(newCard) {
  return { type: ADD_CARD, newCard: newCard }
}

export function changeStatus(id) {
  return { type: CHANGE_STATUS, id: id }
};