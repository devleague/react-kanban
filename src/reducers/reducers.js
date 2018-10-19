import { GET_ALL_CARDS, ADD_CARD } from '../actions/actions.js'


const cardReducer = (state = [], action) => {
    // console.log('REDUCER ACTION: ', action)
    // console.log('CURRENT STATE:', state)
    switch (action.type) {
        case GET_ALL_CARDS:
            console.log('action.playload in GET_ALL_CARDS reducer', action.payload)
            return action.payload
        case ADD_CARD:
            return [...state, action.payload]
        default:
            return state
    }
}

export default cardReducer