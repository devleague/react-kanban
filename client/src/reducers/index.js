import {ADD_CARD} from '../actions';

const initialState = {
	queueCards: [],
	progressCards: [],
	doneCards: []
};

function cards(state = initialState, action) {
	switch(action.actType) {
		case ADD_CARD:
			return Object.assign({}, state, {
				cards: [
					...state.cards,
					{
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
