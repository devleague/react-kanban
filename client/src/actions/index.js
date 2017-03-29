export const ADD_CARD = 'ADD_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';
export const UPDATE_EDIT_BUFF = 'UPDATE_EDIT_BUFF';
export const UPDATE_EDITING = 'UPDATE_EDITING';
export const EDIT_CARD = 'EDIT_CARD';

export function addCard(id, title, type, priority, by, to) {
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

export function updateCard(id, title, type, priority, by, to) {
	return {
		actType: UPDATE_CARD,
		id,
		title,
		type,
		priority,
		by,
		to
	}
}

export function updateEditBuff(id, title, type, priority, by, to) {
	return {
		actType: UPDATE_EDIT_BUFF,
		id,
		title,
		type,
		priority,
		by,
		to
	}
}

export function updateEditing(id) {
	return {
		actType: UPDATE_EDITING,
		id,
		type: null  // redux needs this
	}
}

export function editCard(id, title, type, priority, by, to) {
	return {
		actType: EDIT_CARD,
		id,
		title,
		type,
		priority,
		by,
		to
	}
}
