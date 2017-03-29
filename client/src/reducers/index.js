import {ADD_CARD} from '../actions';
//const ADD_CARD = 'ADD_CARD';

const initialState = {
	cards: []
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
						status: action.status,
						to: action.to,
						by: action.by
					}
				]
			});
		default: 
			return state;
	}
}

export default cards;
