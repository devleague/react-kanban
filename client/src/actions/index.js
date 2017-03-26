export const ADD_CARD = 'ADD_CARD';

export const addCard = (title, type, priority, by, to) => ({
	actType: ADD_CARD,
	title,
	type,
	priority,
	by,
	to
});
