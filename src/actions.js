
// export const ADD_TASK = 'ADD_TASK'
export const CHANGE_STATUS = 'CHANGE_STATUS'

// export function addTask(text) {
//   return { type: ADD_TASK, text: text }
// }

export function changeStatus(id) {
  return { type: CHANGE_STATUS, id: id }
}