export const KANBAN_CARDS = 'KANBAN_CARDS';

export const kanbanCards = (data) => {
  return {
    type: KANBAN_CARDS,
    data,
  }
}