export const ADD_CARD = 'ADD_CARD';

export function addCard (id, title, type, priority, by, to) {
	return {
		actType: ADD_CARD,
		id,
		title,
		type,
		priority,
		by,
		to
	}
}
