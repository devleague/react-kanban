export const ADD_CARD = 'ADD_CARD'
export const EDIT_CARD = 'EDIT_CARD'
export const DELETE_CARD = 'DELETE_CARD'
export const MOVE_CARD = 'MOVE_CARD'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const TOGGLE_EDIT_CARD = 'TOGGLE_EDIT_CARD'

export function addCard(card) {
  return { type: ADD_CARD,
           ...card
         }
}

export function editCard(card) {
  return { type: EDIT_CARD,
           card: card
         }
}

export function deleteCard(card) {
  return { type: DELETE_CARD,
           card: card
         }

}

export function displayEdit(card) {
  console.log('second sanity passed', card);
  return { type: TOGGLE_EDIT_CARD,
           card: card
         }
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id: id }
}