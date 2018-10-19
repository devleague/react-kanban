import { GET_ALL_ITEMS, ADD_ITEM } from '../actions/actions.js'

const itemReducer = (state = [], action) => {
    console.log('reducer action', action)
    console.log('current state', state)
    switch (action.type) {
        case GET_ALL_ITEMS: 
            return action.payload    
        case ADD_ITEM: 
            return [...state, action.payload]
        default: 
            return state    
    }
}

export default itemReducer