import { GET_ALL_CARDS, ADD_CARD } from '../actions/actions.js'


const cardReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_CARDS:
            console.log('action.payload in GET_ALL_ITEMS reducer', action.cards)
            return action.cards
        case ADD_CARD:
            return [...state, action.cards]
        default:
            return state
    }
}

export default cardReducer