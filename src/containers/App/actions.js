export const ADD_CARD = 'ADD_CARD'
export const MOVE_CARD = 'MOVE_CARD'

export function addCard(card) {
  return { type: ADD_CARD,
           title: card.title,
           priority: card.priority,
           status: card.status,
           createdBy: card.createdBy,
           assignedTo: card.assignedTo
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

export function moveCard(card) {
  return { type: MOVE_CARD,
           card: card
         }
}