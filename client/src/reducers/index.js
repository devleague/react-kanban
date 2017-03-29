import {ADD_CARD, UPDATE_CARD, UPDATE_EDIT_BUFF, UPDATE_EDITING, EDIT_CARD} from '../actions';

const initialState = {
	cards: [],
	editing: null,
	editBuff: {
		id: null,
		title: null,
		type: null,
		priority: null,
		by: null,
		to: null
	}
};

function cards(state = initialState, action) {
	switch(action.actType) {
		case ADD_CARD:
			return Object.assign({}, state, {
				cards: [
					...state.cards,
					{
						id: action.id,
						title: action.title,
						type: action.type,
						priority: action.priority,
						to: action.to,
						by: action.by
					}
				]
			});
		case UPDATE_CARD:
			let editCard = state.cards.map(card => {
				return Object.assign({}, state, (card.id === action.id)?action:card);
			});
			return Object.assign({}, state, editCard);
		case UPDATE_EDIT_BUFF:
			let newEditBuff = Object.assign({}, action);
			return Object.assign({}, state, {
				editBuff: newEditBuff
			});
		case UPDATE_EDITING:
			return Object.assign({}, state, {
				editing: action.id
			});
		case EDIT_CARD:
			let newCards = state.cards.map(card => {
				if(card.id === action.id) {
					let {id, title, type, priority, to, by} = action;
					return {id, title, type, priority, to, by};
				}else{
					return Object.assign({}, card);
				}
			});
			return Object.assign({}, state, {cards: newCards});
		default: 
			return state;
	}
}

export default cards;
